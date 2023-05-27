import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Layout from '@/components/shared/Layout';
import CartItem from './CartItem';
import './CartPage.module.css';

const CartPage = () => {
    const { cartItems, itemCount, total } = useContext(CartContext)

    return (
        <Layout>
            <>
                <h1>Carrinho</h1>
                {
                    cartItems.length === 0 ?
                        <div className="empty_cart">Seu carrinho está vazio</div> :
                        <>
                            <div className="cart_page">
                                <div className="cart_item_container">
                                    {
                                        cartItems.map(item => <CartItem {...item} key={item.id} />)
                                    }
                                </div>
                            </div>
                        </>

                }
            </>
        </Layout>
    )
}

export default CartPage