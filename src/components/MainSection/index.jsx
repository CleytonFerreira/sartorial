import Link from 'next/link';
import Image from 'next/image';
import './MainSection.module.css';

const MainSection = () => {
    return (
        <section className="main-section">
            <div className="container">
                <div className="main-img-container">
                    <Image />
                </div>
                
                <div className="text">
                    <h2>Slogan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, asperiores sapiente nostrum explicabo veritatis, harum quisquam magni obcaecati labore velit sint fuga magnam ad amet laudantium praesentium.</p>
                    <button>COMPRAR</button>
                </div>
            </div>
        </section>
    )
}

export default MainSection;