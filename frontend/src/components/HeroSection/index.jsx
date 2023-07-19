import heroStyle from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <section className={heroStyle.hero_section}>
            <h1>Título</h1>
            <button className="cta">CALL TO ACTION</button>
        </section>
    );
};

export default HeroSection;