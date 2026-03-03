import { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Shield, Zap, ChevronDown } from 'lucide-react';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Calculate offset for fixed header (adjust based on your header height)
    const headerOffset = '80px'; // Typical header height

    return (
        <div 
            className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden"
            style={{ 
                marginTop: headerOffset,
                height: `calc(100vh - ${headerOffset})`
            }}
        >
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            {/* Animated gradient orbs with parallax effect */}
            <div className="absolute inset-0 overflow-hidden">
                <div 
                    className="absolute -top-40 -right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
                    style={{
                        transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                    }}
                ></div>
                <div 
                    className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
                    style={{
                        transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)`
                    }}
                ></div>
                <div 
                    className="absolute top-40 left-1/3 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
                    style={{
                        transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.4}px)`
                    }}
                ></div>
            </div>

            {/* Main content container */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col md:flex-row items-center h-full gap-8 md:gap-12 lg:gap-16 transition-all duration-1000 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                    
                    {/* Left column - Text content */}
                    <div className="flex-1 flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                        {/* Animated peace badge */}
                        <div className="flex animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <div className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                                <span className="relative inline-flex items-center gap-2 text-sm md:text-base text-blue-700 font-semibold px-4 py-2.5 bg-white/90 backdrop-blur-sm border border-blue-100 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                                    <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                                        Amani means Peace
                                    </span>
                                    <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                                </span>
                            </div>
                        </div>

                        {/* Main heading with gradient */}
                        <div className="flex flex-col gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                                    Crafting Digital
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Peace of Mind.
                                </span>
                            </h1>
                            
                            {/* Feature highlights with icons */}
                            <div className="space-y-4 mt-2">
                                <div className="flex items-start gap-3 text-gray-700 group">
                                    <div className="p-1.5 bg-green-100 rounded-lg group-hover:scale-110 transition-transform">
                                        <Zap className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-600 flex-1">
                                        <span className="font-semibold text-gray-900">Websites, Graphics, and Tech solutions</span> that work as hard as you do.
                                    </p>
                                </div>
                                <div className="flex items-start gap-3 text-gray-700 group">
                                    <div className="p-1.5 bg-blue-100 rounded-lg group-hover:scale-110 transition-transform">
                                        <Shield className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-600 flex-1">
                                        <span className="font-semibold text-gray-900">Stress-free websites and designs</span> that elevate your brand — with zero headaches.
                                    </p>
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-6 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                                <button className="group relative inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105">
                                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100">
                                        <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -skew-y-3 group-hover:animate-shine"></span>
                                    </span>
                                    <span className="relative flex items-center gap-2">
                                        Start Your Project
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                                <button className="group relative inline-flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-200 hover:border-blue-300 hover:bg-white transition-all duration-300 hover:shadow-xl">
                                    <span className="relative z-10">Watch Demo</span>
                                    <span className="relative z-10 text-blue-600 group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>

                            {/* Trust badges */}
                            <div className="flex flex-wrap items-center gap-6 mt-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                                {['100+ Projects', '50+ Clients', '24/7 Support'].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                        <span className="text-sm text-gray-600 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column - Interactive visual */}
                    <div className="flex-1 flex justify-center items-center order-1 md:order-2 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="relative w-full max-w-md md:max-w-lg">
                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-50 blur-xl animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-50 blur-xl animate-pulse animation-delay-1000"></div>
                            
                            {/* Main card with 3D effect */}
                            <div 
                                className="relative group cursor-pointer"
                                style={{
                                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * -0.5}deg)`
                                }}
                            >
                                {/* Glow effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-0 group-hover:opacity-100 blur transition duration-500"></div>
                                
                                {/* Card content */}
                                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-500">
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
                                    
                                    {/* Animated pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="relative p-8 md:p-10">
                                        {/* Logo area */}
                                        <div className="mb-8 text-center">
                                            <div className="relative inline-block">
                                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                                                <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                                    <span className="text-4xl filter drop-shadow-lg">🎨</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* Brand name with gradient */}
                                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
                                            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                                                AmaniSky
                                            </span>
                                        </h2>
                                        <p className="text-gray-500 text-center mb-8">Design Studio</p>
                                        
                                        {/* Feature list with icons */}
                                        <div className="space-y-4">
                                            {[
                                                { icon: '💻', label: 'Web Development', color: 'blue' },
                                                { icon: '🎨', label: 'Graphic Design', color: 'purple' },
                                                { icon: '🚀', label: 'Digital Solutions', color: 'pink' }
                                            ].map((item, index) => (
                                                <div 
                                                    key={index} 
                                                    className="flex items-center gap-3 p-3 bg-gray-50/80 backdrop-blur-sm rounded-xl border border-gray-100 group/item hover:border-blue-200 transition-all duration-300"
                                                >
                                                    <span className="text-2xl">{item.icon}</span>
                                                    <span className="flex-1 text-gray-700 font-medium">{item.label}</span>
                                                    <span className={`w-2 h-2 bg-${item.color}-500 rounded-full group-hover/item:scale-150 transition-transform`}></span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        {/* Stats bar */}
                                        <div className="mt-6 pt-6 border-t border-gray-100">
                                            <div className="flex justify-between text-sm">
                                                <div>
                                                    <span className="block text-2xl font-bold text-gray-900">150+</span>
                                                    <span className="text-gray-500">Projects</span>
                                                </div>
                                                <div>
                                                    <span className="block text-2xl font-bold text-gray-900">98%</span>
                                                    <span className="text-gray-500">Satisfaction</span>
                                                </div>
                                                <div>
                                                    <span className="block text-2xl font-bold text-gray-900">24/7</span>
                                                    <span className="text-gray-500">Support</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
                    <span className="text-sm">Scroll to explore</span>
                    <ChevronDown className="w-5 h-5 animate-pulse" />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;