import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import { CartContext } from '../../context/CartContext';
import { isInCart } from '../../helpers';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout';
// import productStyle from './SingleProduct.module.css';

const SingleProduct = () => {
    const { products } = useContext(ProductsContext)
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    let navigate = useNavigate()

    useEffect(() => {
        const product = products.find(item => Number(item.id) === Number(id))

        if (!product) {
            navigate('/loja')
        }

        setProduct(product)
    }, [id, navigate, products])

    if (!product) { return null }

    const { imageUrl, title, price, description } = product;
    const itemInCart = isInCart(product, cartItems);

    return (
        <Layout>
            <img src={imageUrl} alt={product.title} />
            <h3>{title}</h3>
            <p>{price}</p>

            {!itemInCart && (
                <button onClick={() => addProduct(product)}>
                    ADICIONAR AO CARRINHO
                </button>
            )}

            {itemInCart && (
                <button onClick={() => increase(product)}>
                    ADICIONAR MAIS
                </button>
            )}

            <button >IR PARA O CHECKOUT </button>
            <p>{description}</p>
        </Layout>
    )
}

export default SingleProduct