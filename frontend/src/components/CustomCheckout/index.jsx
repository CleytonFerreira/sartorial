import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { fetchFromAPI } from "../../helpers";
import PropTypes from 'prop-types';

const CustomCheckout = ({ shipping, cartItems }) => {
    const [processing, setProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [clientSecret, setClientSecret] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    let navigate = useNavigate();

    useEffect(() => {
        const items = cartItems.map(item => ({ price: item.price, quantity: item.quantity }));

        if (shipping) {
            const body = {
                cartItems: items,
                shipping: {
                    name: shipping.name,
                    address: {
                        line1: shipping.address
                    }
                },
                description: "Payment intent para sartorial",
                receipt_email: shipping.email
            };

            const customCheckout = async () => {
                const { clientSecret } = await fetchFromAPI('create-payment-intent', {
                    body
                });

                setClientSecret(clientSecret);
            };
            customCheckout();

            return;
        }
    }, [shipping, cartItems]);

    const handleCheckout = async () => {
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardNumberElement)
            }
        });

        if (payload.error) {
            setError(`Falha no pagamento: ${payload.error.message}`);
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
                color: "#000",
                fontFamily: 'Roboto, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#606060",
                },
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    return (
        <div>
            <h4>Adicionar informações de pagamento</h4>

            <div className="stripe-card">
                <CardNumberElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>

            <div className="stripe-card">
                <CardExpiryElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>

            <div className="stripe-card">
                <CardCvcElement
                    className="card-element"
                    options={cardStyle}
                    onChange={cardHandleChange}

                />
            </div>

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
    shipping: PropTypes.object({
        name: PropTypes.string,
        address: PropTypes.string,
        email: PropTypes.string,
    }),
    cartItems: PropTypes.arrayOf(PropTypes.object({
        price: PropTypes.number,
        quantity: PropTypes.number,
    })),
};


export default CustomCheckout;