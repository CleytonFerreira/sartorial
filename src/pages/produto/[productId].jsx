import { useContext } from 'react';
import { ProductsContext } from '@/context/ProductsContext';
import { useRouter } from 'next/router';
import './SingleProduct.module.css';

const SingleProduct = () => {
    const { products } = useContext(ProductsContext)
    const router = useRouter();
    const productId = router.query.productId;

    const item = products.find(product => product.id === parseInt(productId));

    if (item) {
        return (
            <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                {/* <img src={product.imageUrl} alt={product.title} /> */}
            </div>
        )
    }
    else {
        return <p>Produto não encontrado</p>;
    }
}

export default SingleProduct