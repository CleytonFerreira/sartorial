import { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import Layout from '../../components/shared/Layout';
import FeaturedProduct from '../../components/shared/FeaturedProduct';

const ShopPage = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedProduct {...product} key={product.id} />
    ));

    return (
        <Layout>
            <div className='product-list-container'>
                <h1 className='product-list-title'>Loja</h1>
                <div className='product-list'>
                    {allProducts}
                </div>
            </div>
        </Layout>
    );
}

export default ShopPage;