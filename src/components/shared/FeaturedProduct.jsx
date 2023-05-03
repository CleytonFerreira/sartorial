import Link from 'next/link';
import './FeaturedProduct.module.css';
import Image from 'next/image';

const FeaturedProduct = (product) => {
    const { title, imageUrl, price } = product

    return (
        <div className="featured-product">
            <Link href={`produto/${product.id}`}>
                <div className="featured-image">
                    <Image src={imageUrl}
                        height={100}
                        width={100}
                        alt="produto" />
                </div>
                <div className="name-price">
                    <h3>{title}</h3>
                    <p>{price} R$</p>
                </div>
            </Link>
            <button>ADICIONAR AO CARRINHO</button>
        </div>
    )
}

export default FeaturedProduct;