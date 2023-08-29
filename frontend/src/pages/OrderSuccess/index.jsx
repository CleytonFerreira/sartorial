import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
import { CartContext } from '../../context/CartContext';

const Success = () => {
    const { clearCart, cartItems } = useContext(CartContext);

    useEffect(() => {
        if (cartItems.length !== 0) {
            clearCart();
        }
    }, [clearCart, cartItems]);

    let navigate = useNavigate();

    return (
        <Layout>
            <div>
                <h1>Obrigado pela sua compra 🙂</h1>
                <p>Estamos processando seu pedido e em breve lhe enviaremos um e-mail de confirmação.</p>
                <div>
                    <button onClick={() => navigate('/loja')}>Continuar comprando</button>
                </div>
            </div>
        </Layout>
    );
};

export default Success;