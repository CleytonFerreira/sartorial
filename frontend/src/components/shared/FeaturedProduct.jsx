import { useContext } from 'react';
import { isInCart } from '../../helpers';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FeaturedProduct = (props) => {
    const { title, imageUrl, price, id, description } = props;
    const product = { title, imageUrl, price, id, description };
    const { addProduct, cartItems, increase } = useContext(CartContext);
    const itemInCart = isInCart(product, cartItems);

    return (
        <div className="featured_product">
            <Link to={`/loja/produto/${product.id}`}>
                <div className="featured-image">
                    <img src={imageUrl} alt="produto" />
                </div>
            </Link>
            <div className="name-price">
                <h3>{title}</h3>
                <p>R${price}</p>
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
    );
};

FeaturedProduct.propTypes = {
    title: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    description: PropTypes.string
};

export default FeaturedProduct;