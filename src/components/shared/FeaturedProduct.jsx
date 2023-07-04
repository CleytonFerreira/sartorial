import { useContext } from "react";
import {isInCart} from '../../helpers';
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const FeaturedProduct = (props) => {
    const { title, imageUrl, price, id, description } = props
    const product = { title, imageUrl, price, id, description }
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const itemInCart = isInCart(product, cartItems)

    return (
        <div className="featured_product">
            <Link to={`produto/${product.id}`}>
            <div className="featured-image">
                    <img src={imageUrl} alt="produto" />
                </div>
            </Link>
            <div className="name-price">
                <h3>{title}</h3>
                <p>{price}R$</p>
                {
                    !itemInCart &&
                    <button onClick={() => addProduct(product)}>ADICIONAR AO CARRINHO</button>
                }
                {
                    itemInCart &&
                    <button onClick={() => increase(product)}>ADICIONAR MAIS</button>
                }
            </div>
        </div>
    )
}


export default FeaturedProduct;