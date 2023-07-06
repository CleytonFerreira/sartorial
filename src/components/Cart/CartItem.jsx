import plusIcon from '../../assets/plus_icon.svg';
import minusIcon from '../../assets/minus_icon.svg';
import trashIcon from '../../assets/trash_icon.svg';

const CartItem = (props) => {
    const { title, imageUrl, price, quantity, id, description, increase, decrease, removeProduct } = props
    const product = { title, imageUrl, price, quantity, id, description }

    return (
        <div className="cart_item">
            <div className="item_image">
                <img src={imageUrl} alt="produto" />
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
                    <img src={plusIcon} alt="" />
                </button>
                {
                    quantity === 1 &&
                    <button className="btn_trash" onClick={() => removeProduct(product)}>
                        <img src={trashIcon} alt="" />
                    </button>
                }
                {
                    quantity > 1 &&
                    <button className="btn_decrease" onClick={() => decrease(product)}>
                        <img src={minusIcon} alt="" />
                    </button>
                }
            </div>
        </div>
    )
}

export default CartItem;