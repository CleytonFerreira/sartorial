import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartContext } from "@/context/CartContext";
import './CartIcon.module.css';

const CartIcon = () => {
    const { itemCount } = useContext(CartContext)
    const [initialItemCount, setInitialItemCount] = useState(itemCount)

    useEffect(() => {
        setInitialItemCount(itemCount)
    }, [itemCount])

    return (
        <div>
            <Link href="carrinho">
                <Image
                    src="/shopping_bag.svg"
                    height={28}
                    width={28}
                    alt="" />
            </Link>
            {
                initialItemCount > 0 ? <span>{initialItemCount}</span> : null
            }
        </div>
    )
}

export default CartIcon;