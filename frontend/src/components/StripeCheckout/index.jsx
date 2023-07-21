import { useContext, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CartContext } from '../../context/CartContext';
import { fetchFromAPI } from '../../helpers';

const StripeCheckout = () => {
    const [email, setEmail] = useState('');
    const { cartItems } = useContext(CartContext);
    const stripe = useStripe();
    const handleGuestCheckout = async (e) => {
        e.preventDefault();
        const line_items = cartItems.map(item => {
            return {
                quantity: item.quantity,
                price_data: {
                    currency: 'usd',
                    unit_amount: item.price * 100, //amount em cents
                    product_data: {
                        name: item.title,
                        description: item.description,
                        images: [item.imageUrl]
                    }
                }
            };
        });

        const response = await fetchFromAPI('create-checkout-session', {
            body: { line_items, customer_email: email },
        });

        const { sessionId } = response;
        const { error } = await stripe.redirectToCheckout({
            sessionId
        });

        if (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleGuestCheckout}>
            <div>
                <input
                    type="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    value={email}
                />
            </div>
            <div type="submit">
                Finalizar pedido
            </div>
        </form>
    );
};

export default StripeCheckout;