import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleMenu = () => {
        setShowMenu(prev => !prev);
    }

    const handleLinkClick = () => {
        setShowMenu(false);
    }
    
    return(
        <div className={`w-full h-auto flex items-center justify-between px-5 py-4 md:px-10 lg:px-20 fixed top-0 z-50 transition-all duration-300 ${
            scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}>
            {/* Logo */}
            <h1 className="text-2xl md:text-3xl font-bold">
                AmaniSky<span className="text-stone-500 font-light">.tech</span>
            </h1>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center gap-8 lg:gap-12 text-base lg:text-lg font-medium">
                <li className="cursor-pointer hover:text-red-500 transition relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-red-500 transition relative group">
                    Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-red-500 transition relative group">
                    Process
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-red-500 transition relative group">
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </li>
                <li className="cursor-pointer hover:text-red-500 transition relative group">
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
                </li>
            </ul>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
                {showMenu ? (
                    <h1 
                        className="text-4xl text-red-500 font-light cursor-pointer hover:scale-110 transition" 
                        onClick={handleMenu}
                    >
                        ×
                    </h1>
                ) : (
                    <MdMenu 
                        className="text-3xl cursor-pointer hover:scale-110 transition" 
                        onClick={handleMenu}
                    />
                )}
            </div>

            {/* Mobile Menu with Animation */}
            {showMenu && (
                <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg md:hidden animate-slideDown">
                    <ul className="flex flex-col items-center gap-6 py-8 text-xl">
                        {['Home', 'Services', 'Process', 'Contact', 'About'].map((item) => (
                            <li 
                                key={item}
                                className="cursor-pointer hover:text-red-500 transition w-full text-center py-2 hover:bg-red-50"
                                onClick={handleLinkClick}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Header;