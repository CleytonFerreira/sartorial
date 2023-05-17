import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import './CartIcon.module.css';

const CartIcon = () => {
    const { itemCount, cartItems } = useContext(CartContext)
    console.log('Itens no carrinho: ', cartItems );

    return (
        <div className="cart">
            <Image
                src="/shopping_bag.svg"
                height={28}
                width={28}
                alt="" />
            {
                itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null
            }
        </div>
    )
}

export default CartIcon;