import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/shared/Layout';
import checkoutPageStyle from './CheckoutPage.module.css';
import ShippingAddress from '../../components/StripeCheckout/CustomCheckout/ShippingAddress';

const CheckoutPage = () => {
    const { itemCount, total } = useContext(CartContext);
    const [shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    };

    return (
        <Layout>
            <div className={checkoutPageStyle.checkout}>
                <h2>Resumo do pedido</h2>
                <h3>{`Total de itens: ${itemCount}`}</h3>
                <h4>{`Valor a ser pago: R$${total}`}</h4>
                <div style={addressShown}>
                    <ShippingAddress setShipping={setShipping} />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;