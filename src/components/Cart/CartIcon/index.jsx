import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import './CartIcon.module.css';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext)
    const [cartState, setCartState] = useState(itemCount)

    useEffect(()=> {
        setCartState(itemCount)
    }, [itemCount])

    return (
        <div className="cart">
            <Link href="carrinho">
                <Image
                    src="/shopping_bag.svg"
                    height={28}
                    width={28}
                    alt="" />
            </Link>
            {
                itemCount > 0 ? <span>{cartState}</span> : null
            }
        </div>
    )
}

export default CartIcon;