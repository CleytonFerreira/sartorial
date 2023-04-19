import Link from "next/link";
import Image from "next/image";
import './CartIcon.module.css';

const CartIcon = () => {
    return (
        <div className="cart">
            <Image
                src="/shopping_bag.svg"
                height={28}
                width={28}
                alt="" />
                
            <span className="cart-count">5</span>
        </div>
    )
}

export default CartIcon