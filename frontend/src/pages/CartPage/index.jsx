import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Layout from '../../components/shared/Layout';
import CartItem from '../../components/Cart/CartItem';
import Total from '../../components/Cart/Total';
// import cartPageStyle from './CartPage.module.css';

const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease, removeProduct, clearCart } = useContext(CartContext);
    const funcs = { increase, decrease, removeProduct };

    return (
        <Layout>
            <h1>Carrinho</h1>
            {
                cartItems.length === 0 ?
                    <div className="empty_cart">Seu carrinho está vazio</div> :
                    <>
                        <div className="cart_page">
                            <div className="cart_item_container">
                                {
                                    cartItems.map(item => <CartItem {...item} key={item.id} {...funcs} />)
                                }
                            </div>
                        </div>
                        <Total itemCount={itemCount} total={total} clearCart={clearCart} />
                    </>
            }
        </Layout>
    );
};

export default CartPage;