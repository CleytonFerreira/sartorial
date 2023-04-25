import './FeaturedProduct.module.css';
import Image from 'next/image';

const FeaturedProduct = (product) => {
    const { title, imageUrl, price } = product

    return (
        <div className="featured-product">
            <div className="featured-image">
                <Image src={imageUrl}  
                height={100}
                width={100} 
                alt="produto"  />
            </div>
            <div className="name-price">
                <h3>{title}</h3>
                <p>{price} R$</p>
                <button>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
    )
}

export default FeaturedProduct