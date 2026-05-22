import { MdMenu } from 'react-icons/md'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'Home', page: 'home' },
  { label: 'Services', page: 'services' },
  { label: 'Process', page: 'process' },
  { label: 'Contact', page: 'contact' },
  { label: 'About', page: 'about' }
]

const Header = ({ activePage, onNavigate }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenu = () => {
    setShowMenu(prev => !prev)
  }

  const handleLinkClick = (page) => {
    if (onNavigate) onNavigate(page)
    setShowMenu(false)
  }

  return (
    <div className={`w-full h-auto flex items-center justify-between px-5 py-4 md:px-10 lg:px-20 fixed top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <button onClick={() => onNavigate('home')} className="text-2xl md:text-3xl font-bold text-left">
        AmaniSky<span className="text-stone-500 font-light">.tech</span>
      </button>

      <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-base lg:text-lg font-medium">
        {navItems.map((item) => (
          <li key={item.page}>
            <button
              onClick={() => handleLinkClick(item.page)}
              className={`relative group ${activePage === item.page ? 'text-blue-600' : 'text-slate-700 hover:text-blue-600'} transition`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full"></span>
            </button>
          </li>
        ))}
      </ul>

      <div className="md:hidden">
        {showMenu ? (
          <button
            className="text-4xl text-blue-600 font-light cursor-pointer hover:scale-110 transition"
            onClick={handleMenu}
          >
            ×
          </button>
        ) : (
          <MdMenu className="text-3xl cursor-pointer hover:scale-110 transition" onClick={handleMenu} />
        )}
      </div>

      {showMenu && (
        <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg md:hidden animate-slideDown">
          <ul className="flex flex-col items-center gap-6 py-8 text-xl">
            {navItems.map((item) => (
              <li key={item.page} className="w-full">
                <button
                  type="button"
                  onClick={() => handleLinkClick(item.page)}
                  className="w-full text-center py-3 text-slate-700 hover:text-blue-600 transition hover:bg-blue-50"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Header;