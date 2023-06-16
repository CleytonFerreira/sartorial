import HeroSection from "../../components/HeroSection";
import homeStyle from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <HeroSection className={homeStyle.home} />
        </>
    )
}

export default HomePage;