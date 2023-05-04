import { useContext } from 'react';
import { ProductsContext } from '@/context/ProductsContext';
import { useRouter } from 'next/router';
import Image from 'next/image';
import './SingleProduct.module.css';

const SingleProduct = () => {
    const { products } = useContext(ProductsContext)
    const router = useRouter();
    const productId = router.query.productId;

    const item = products.find(product => product.id === Number(productId));

    if (item) {
        return (
            <div>
                <Image src={item.imageUrl} alt={item.title} width="300" height="300"/>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <p>{item.price}R$</p>
                <button>ADICIONAR AO CARRINHO</button>
                <button>COMPRAR AGORA</button>
            </div>
        )
    }
    else {
        return <p>Produto não encontrado</p>;
    }
}

export default SingleProduct