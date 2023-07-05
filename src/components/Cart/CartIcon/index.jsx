import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import cartIconStyle from './CartIcon.module.css';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext)
    const [cartState, setCartState] = useState(itemCount)

    useEffect(() => {
        setCartState(itemCount)
    }, [itemCount])

    return (
        <div className={cartIconStyle.cart_icon}>
            <Link to="carrinho">
                {/* <img src="/shopping_bag.svg" alt="" /> */}
            </Link>
            {
                itemCount > 0 ? <span>{cartState}</span> : null
            }
        </div>
    )
}

export default CartIcon;