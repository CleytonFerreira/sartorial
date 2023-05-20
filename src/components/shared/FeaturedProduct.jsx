import { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';
import { isInCart } from '@/lib/helpers';
import './FeaturedProduct.module.css';

const FeaturedProduct = (props) => {
    const { title, imageUrl, price, id, description } = props
    const product = { title, imageUrl, price, id, description }
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const itemInCart = isInCart(product, cartItems)

    return (
        <div className="featured-product">
            <Link href={`produto/${product.id}`}>
                <div className="featured-image">
                    <Image src={imageUrl}
                        height={100}
                        width={100}
                        alt="produto" />
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