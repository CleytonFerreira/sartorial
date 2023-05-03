import { useContext } from 'react';
import { ProductsContext } from '@/context/ProductsContext';
import Link from 'next/link';
import Layout from '@/components/shared/Layout';
import FeaturedProduct from '@/components/shared/FeaturedProduct';
import './ShopPage.module.css';



const ShopPage = () => {
    const { products } = useContext(ProductsContext)
    const allProducts = products.map(product => (
        <div key={product.id}>
            <Link href={`produto/${product.id}`}>
                <FeaturedProduct {...product} />
            </Link>
        </div>
    ))

    return (
        <Layout>
            <div className="product-list-container">
                <h1 className="product-list-title">Loja</h1>
                <div className="product-list">
                    {allProducts}
                </div>
            </div>
        </Layout>
    )
}

export default ShopPage