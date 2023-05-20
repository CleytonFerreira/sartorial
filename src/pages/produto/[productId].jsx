import { useContext } from 'react';
import { ProductsContext } from '@/context/ProductsContext';
import { CartContext } from '@/context/CartContext';
import { useRouter } from 'next/router';
import { isInCart } from '@/lib/helpers';
import Image from 'next/image';
import './SingleProduct.module.css';

const SingleProduct = () => {
    const { products } = useContext(ProductsContext)
    const { addProduct, cartItems, increase } = useContext(CartContext)
    const router = useRouter()
    const productId = router.query.productId

    const item = products.find(product => product.id === Number(productId))
    const itemInCart = isInCart(item, cartItems)

    if (item) {
        return (
            <div>
                <Image src={item.imageUrl} alt={item.title} width="300" height="300" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}R$</p>
                {
                    !itemInCart &&
                    <button onClick={() => addProduct(item)}>ADICIONAR AO CARRINHO</button>
                }
                {
                    itemInCart &&
                    <button onClick={() => increase(item)}>ADICIONAR MAIS</button>
                }
            </div>
        )
    }
    else {
        return <p>Produto não encontrado</p>
    }
}

export default SingleProduct