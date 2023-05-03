import Link from "next/link";
import Image from "next/image";
import './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <h1>Título</h1>
            <button className="cta">CALL TO ACTION</button>
        </section>
    )
}

export default HeroSection;