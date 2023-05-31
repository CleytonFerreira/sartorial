import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Layout from '@/components/shared/Layout';
import CartItem from './CartItem';
import Total from './Total';
import './CartPage.module.css';


const CartPage = () => {
    const { cartItems, itemCount, total, increase, decrease } = useContext(CartContext)
    const funcs = {increase, decrease}

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
                                        cartItems.map(item => <CartItem {...item} key={item.id} {...funcs}/>)
                                    }
                                </div>
                            </div>
                            <Total itemCount={itemCount} total={total} />
                        </>

                }
            </>
        </Layout>
    )
}

export default CartPage