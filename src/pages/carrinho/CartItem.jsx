import Image from "next/image";

const CartItem = (product) => {
    const { title, imageUrl, price, quantity } = product

    return (
        <div className="cart_item">
            <div className="item_image">
                <Image
                    src={imageUrl}
                    height={80}
                    width={80}
                    alt="produto" />
            </div>
            <div className="name_price">
                <h4>{title}</h4>
                <p>{price} R$</p>
            </div>
            <div className="quantity">
                <p>{`Quantidade: ${quantity}`}</p>
            </div>

            <div className="btns_container">
                <button className="btn_increase">
                    <Image
                        src="/plus_icon.svg"
                        height={16}
                        width={16}
                        alt="" />
                </button>
                {
                    quantity === 1 &&
                    <button className="btn_trash">
                        <Image
                            src="/trash_icon.svg"
                            height={16}
                            width={16}
                            alt="" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button className="btn_decrease">
                        <Image
                            src="/minus_icon.svg"
                            height={16}
                            width={16}
                            alt="" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem;