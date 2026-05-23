import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection'

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="relative w-full flex flex-col">
      <HeroSection onNavigate={onNavigate} />
      <MainSection onNavigate={onNavigate} />
    </div>
  )
}

export default LandingPage;