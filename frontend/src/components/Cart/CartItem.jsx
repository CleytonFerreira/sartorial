import PropTypes from 'prop-types';
import plusIcon from '../../assets/icons/plus_icon.svg';
import minusIcon from '../../assets/icons/minus_icon.svg';
import trashIcon from '../../assets/icons/trash_icon.svg';

const CartItem = (props) => {
    const { title, imageUrl, price, quantity, id, description, increase, decrease, removeProduct } = props;
    const product = { title, imageUrl, price, quantity, id, description };

    return (
        <div className="cart_item">
            <div className="item_image">
                <img src={imageUrl} alt="produto" />
            </div>
            <div className="name_price">
                <h4>{title}</h4>
                <p>R${price}</p>
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
    );
};

CartItem.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    id: PropTypes.number,
    description: PropTypes.string,
    increase: PropTypes.func,
    decrease: PropTypes.func,
    removeProduct: PropTypes.func
};

export default CartItem;