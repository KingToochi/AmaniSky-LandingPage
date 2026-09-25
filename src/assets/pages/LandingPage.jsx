import HeroSection from '../components/HeroSection'
import MainSection from '../components/MainSection'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const LandingPage = ({ onNavigate }) => {
  return (
    <div className="relative w-full flex flex-col">
      <HeroSection onNavigate={onNavigate} />
      <a
        href="https://fashion.amanisky.tech/products"
        target="_blank"
        rel="noreferrer"
        aria-label="Explore AmaniSky Fashion World products"
        className="group relative isolate overflow-hidden bg-[#111111] text-white transition-colors duration-300 hover:bg-[#1b1b1b] focus:outline-none focus-visible:ring-4 focus-visible:ring-pink-400/50"
      >
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-fuchsia-500/30 via-rose-500/10 to-transparent opacity-80 transition-transform duration-700 group-hover:scale-110" />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:gap-12 md:py-14 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-pink-300">
              <Sparkles className="h-4 w-4" />
              AmaniSky NexTech presents
            </div>
            <h2 className="max-w-xl text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              AMANISKY FASHION world.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
              Discover Your Style. Shop with Confidence. <br/>
              Clothes • Shoes • Bags • Accessories
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-end">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Shop the collection</span>
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-6 w-6" />
            </span>
          </div>
        </div>
      </a>
      <MainSection onNavigate={onNavigate} />
    </div>
  )
}

export default LandingPage;