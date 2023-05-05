import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import './CartIcon.module.css';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext)

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