import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartImg from '../../assets/icons/cart_img.svg';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext);
    const [cartState, setCartState] = useState(itemCount);

    useEffect(() => {
        setCartState(itemCount);
    }, [itemCount]);

    return (
        <div>
            <Link to='/carrinho'>
                <img src={cartImg} alt='carrinho' />
            </Link>
            {
                itemCount > 0 ? <span>{cartState}</span> : null
            }
        </div>
    );
};

export default CartIcon;