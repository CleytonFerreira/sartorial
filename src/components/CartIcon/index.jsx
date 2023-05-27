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
            <Link href="carrinho">
            <Image
                src="/shopping_bag.svg"
                height={28}
                width={28}
                alt="" />
            {
                itemCount > 0 ? <span className="cart-count">{itemCount}</span> : null
            }
            </Link>
        </div>
    )
}

export default CartIcon;