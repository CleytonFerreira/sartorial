import Image from "next/image";

const CartItem = (props) => {
    const { title, imageUrl, price, quantity, id, description, increase, decrease, removeProduct } = props
    const product = { title, imageUrl, price, quantity, id, description }

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
                <button className="btn_increase" onClick={() => increase(product)}>
                    <Image
                        src="/plus_icon.svg"
                        height={16}
                        width={16}
                        alt="" />
                </button>
                {
                    quantity === 1 &&
                    <button className="btn_trash" onClick={() => removeProduct(product)}>
                        <Image
                            src="/trash_icon.svg"
                            height={16}
                            width={16}
                            alt="" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button className="btn_decrease" onClick={() => decrease(product)}>
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