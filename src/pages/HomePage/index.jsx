import HeroSection from "../../components/HeroSection";
import MainSection from "../../components/MainSection";
import FeaturedCollection from "../../components/FeaturedCollection";
import Layout from "../../components/shared/Layout";


const HomePage = () => {
    return (
        <Layout>
            <HeroSection />
            <MainSection />
            <FeaturedCollection />
        </Layout>
    )
}

export default HomePage;