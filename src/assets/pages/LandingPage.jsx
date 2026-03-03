import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import MainSection from "../components/MainSection";
const LandingPage = () => {

    return(
        <div className="relative w-full flex flex-col">
        <Header />
        <HeroSection />
        <MainSection />
        </div>
    )
}

export default LandingPage;