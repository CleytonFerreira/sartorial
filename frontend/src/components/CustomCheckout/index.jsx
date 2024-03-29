import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { fetchFromAPI } from '../../helpers';
import { UserContext } from '../../context/UserContext';
import PropTypes from 'prop-types';

const CustomCheckout = ({ shipping, cartItems }) => {
    const { user } = useContext(UserContext);
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const [cards, setCards] = useState(null);
    const [paymentCard, setPaymentCard] = useState('');
    const [saveCard, setSavedCard] = useState(false);
    const [paymentIntentId, setPaymentIntentId] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    let navigate = useNavigate();

    useEffect(() => {
        const items = cartItems.map(item => ({ price: item.price, quantity: item.quantity }));

        if (user) {
            const savedCards = async () => {
                try {
                    const cardsList = await fetchFromAPI('get-payment-methods', {
                        method: 'GET'
                    });
                    setCards(cardsList);
                } catch (error) {
                    console.log(error);
                }
            };
            savedCards();
        }

        if (shipping) {
            const body = {
                cartItems: items,
                shipping: {
                    name: shipping.name,
                    address: {
                        line1: shipping.address
                    }
                },
                description: 'Payment intent para sartorial',
                receipt_email: shipping.email
            };

            const customCheckout = async () => {
                const { clientSecret, id } = await fetchFromAPI('create-payment-intent', {
                    body
                });

                setClientSecret(clientSecret);
                setPaymentIntentId(id);
            };
            customCheckout();
        }
    }, [shipping, cartItems]);

    const handleCheckout = async () => {
        setProcessing(true);

        let si;
        if (saveCard) {
            si = await fetchFromAPI('save-payment-method');
        }

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        });

        if (payload.error) {
            setError(`Falha no pagamento: ${payload.error.message}`);
        } else {
            if (saveCard && si) {
                await stripe.confirmCardSetup(si.client_secret, {
                    payment_method: {
                        card: elements.getElement(CardNumberElement)
                    }
                });
                navigate('/success');
            } else {
                navigate('/success');
            }
        }
    };

    const savedCardCheckout = async () => {
        setProcessing(true);
        const { clientSecret } = await fetchFromAPI('update-payment-intent', {
            body: { paymentIntentId }, method: 'PUT',
        });

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: paymentCard
        });

        if (payload.error) {
            setError(`Falha no pagamento: ${payload.error.message}`);
            setProcessing(false);
        } else {
            navigate('/success');
        }
    };

    const cardHandleChange = (event) => {
        const { error } = event;
        setError(error ? error.message : '');
    };

    const cardStyle = {
        style: {
            base: {
                color: '#000',
                fontFamily: 'Roboto, sans-serif',
                fontSmoothing: 'antialiased',
                fontSize: '16px',
                '::placeholder': {
                    color: '#606060',
                },
            },
            invalid: {
                color: '#fa755a',
                iconColor: '#fa755a'
            }
        }
    };

    let cardOption;

    if (cards) {
        cardOption = cards.map((card) => {
            const { card: { brand, last4, exp_month, exp_year } } = card;
            return (
                <option key={card.id} value={card.id}>
                    {`${brand}/ **** **** **** ${last4} ${exp_month}/${exp_year}`}
                </option>
            );
        });
        cardOption.unshift(
            <option key="Selecione um cartao"> Selecione um cartão</option>
        );
    }

    return (
        <div>
            {
                user && (cards && cards.length > 0) &&
                <div>
                    <h4>Pagar com cartão salvo</h4>
                    <select value={paymentCard} onChange={e => setPaymentCard(e.target.value)}>
                        {cardOption}
                    </select>
                    <button
                        type='submit'
                        disabled={processing || !paymentCard}
                        onClick={() => savedCardCheckout()}
                    >
                        {processing ? 'PROCESSANDO' : 'PAGAR COM CARTÃO SALVO'}
                    </button>
                </div>
            }

            <h4>Adicionar informações de pagamento</h4>

            <div className='stripe-card'>
                <CardNumberElement
                    className='card-element'
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>

            <div className='stripe-card'>
                <CardExpiryElement
                    className='card-element'
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>

            <div className='stripe-card'>
                <CardCvcElement
                    className='card-element'
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>
            {
                user &&
                <div className='save-card'>
                    <label>Salvar cartão</label>
                    <input type='checkbox'
                        checked={saveCard}
                        onChange={e => setSavedCard(e.target.checked)}
                    />
                </div>
            }
            <div>
                <button
                    disabled={processing}
                    onClick={() => handleCheckout()}
                >
                    {processing ? 'PROCESSANDO' : 'PAGAR'}
                </button>
            </div>
            {error && (<p >{error}</p>)}
        </div>
    );
};

CustomCheckout.propTypes = {
    shipping: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        email: PropTypes.string,
    }),
    cartItems: PropTypes.arrayOf(PropTypes.shape({
        price: PropTypes.number,
        quantity: PropTypes.number,
    })),
};


export default CustomCheckout;