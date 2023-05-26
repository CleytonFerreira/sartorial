import Image from "next/image";

const CartItem = (product) => {
    const { title, imageUrl, price, quantity } = product

    return (
        <div>
            <div>
                <Image
                    src={imageUrl}
                    height={16}
                    width={16}
                    alt="produto" />
            </div>
            <div className="name-price">
                <h4>{title}</h4>
                <p>{price} R$</p>
            </div>
            <div className="quantity">
                <p>{`Quantidade: ${quantity}`}</p>
            </div>

            <div className="btns-container">
                <button>
                    <Image
                        src="/plus_icon.svg"
                        height={16}
                        width={16}
                        alt="" />
                </button>
                {
                    quantity === 1 &&
                    <button>
                        <Image
                            src="/trash_icon.svg"
                            height={20}
                            width={20}
                            alt="" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <Image
                        src="/minus_icon.svg"
                        height={16}
                        width={16}
                        alt="" />
                }
            </div>
        </div>
    )
}

export default CartItem;