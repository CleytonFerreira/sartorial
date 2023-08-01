import { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/shared/Layout';
import checkoutPageStyle from './CheckoutPage.module.css';
import ShippingAddress from '../../components/CustomCheckout/ShippingAddress';
import CustomCheckout from '../../components/CustomCheckout';

const CheckoutPage = () => {
    const { itemCount, total, cartItems } = useContext(CartContext);
    const [shipping, setShipping] = useState(null);
    const addressShown = {
        display: (shipping ? 'none' : 'block')
    };
    const cardShown = {
        display: (shipping ? 'block' : 'none')
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
                <div style={cardShown}>
                    <CustomCheckout {...{ shipping, cartItems }} />
                </div>
            </div>
        </Layout>
    );
};

export default CheckoutPage;