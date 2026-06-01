import { FaHeart, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import { FaShield } from "react-icons/fa6";
import { IoIosSpeedometer } from "react-icons/io";
import { GiStack } from "react-icons/gi";
import { HiOutlineSupport } from "react-icons/hi";
import { MdOutlineDesignServices, MdRocketLaunch, MdOutlineChat } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { useState, useEffect } from "react";

const MainSection = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document.querySelectorAll('[data-observe]').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white">
            {/* Floating elements background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            {/* Main container with proper spacing from absolute HeroSection */}
            <div className="relative pt-20 md:pt-24 lg:pt-28">
                {/* Value Proposition Card */}
                <div data-observe id="value-prop" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                    <div className={`bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${isVisible['value-prop'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <div className="relative p-8 md:p-12 lg:p-16">
                            {/* Decorative pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full"></div>
                                <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white rounded-full"></div>
                            </div>
                            
                            <div className="relative text-white">
                                <div className="flex justify-center mb-8 animate-float">
                                    <span className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-lg">
                                        <FaHeart className="text-pink-300" />
                                        Amani = Peace
                                        <FaHeart className="text-pink-300" />
                                    </span>
                                </div>
                                
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 leading-tight">
                                    Tech Shouldn't Be Stressful.
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                                        It Should Be Serene.
                                    </span>
                                </h1>
                                
                                <p className="text-xl text-center mb-4 text-blue-100">
                                    At AmaniSky, we believe that technology should feel as clear and open as the sky.
                                </p>
                                
                                <p className="text-lg text-center max-w-3xl mx-auto text-blue-50">
                                    "Amani" means peace, and that is exactly what we bring to your digital journey. 
                                    Whether you need a high-converting website or a brand identity that pops, 
                                    we handle the heavy lifting so you can enjoy the view from the top.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* What We Do Section */}
                <div data-observe id="what-we-do" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <div className="text-center mb-16">
                        <div className={`inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible['what-we-do'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                            <BsStars className="text-blue-600" />
                            <span className="text-blue-800 font-semibold">WHAT WE DO</span>
                        </div>
                        <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-200 ${isVisible['what-we-do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Your full-service tech partner
                        </h2>
                        <p className={`text-xl text-gray-600 transition-all duration-700 delay-300 ${isVisible['what-we-do'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            From pixels to code — we handle it all with a calm, clear approach.
                        </p>
                    </div>

                    {/* Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <FaLaptopCode className="text-4xl" />,
                                title: "Websites That Bring You Business",
                                description: "No templates, no shortcuts. We build fast, secure, and mobile-friendly websites designed to turn visitors into customers. E‑commerce, portfolios, corporate — we create your digital home.",
                                color: "from-blue-500 to-blue-600",
                                delay: 0
                            },
                            {
                                icon: <FaPaintBrush className="text-4xl" />,
                                title: "Designs That Make You Shine",
                                description: "From logos to social media graphics, we craft designs that capture your brand's personality and make you stand out in a crowded market.",
                                color: "from-purple-500 to-purple-600",
                                delay: 200
                            },
                            {
                                icon: <FaHeart className="text-4xl" />,
                                title: "You Dream It, We Build It",
                                description: "Custom software tools, automation, IT consultations — the 'other tech stuff' that keeps you up at night? That's our playground.",
                                color: "from-pink-500 to-pink-600",
                                delay: 400
                            }
                        ].map((service, index) => (
                            <div
                                key={index}
                                data-observe
                                id={`service-${index}`}
                                className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${isVisible[`service-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                style={{ transitionDelay: `${service.delay}ms` }}
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                <div className="relative p-8">
                                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* The AmaniSky Advantage */}
                <div data-observe id="advantage" className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 py-24 mb-32">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white mb-16">
                            <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 ${isVisible['advantage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                The AmaniSky Advantage
                            </h2>
                            <p className={`text-xl text-blue-100 transition-all duration-700 delay-200 ${isVisible['advantage'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                Peace of mind comes standard.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <FaShield className="text-3xl" />,
                                    title: "Peace of Mind, Guaranteed",
                                    description: "With transparent pricing, clear timelines, and a commitment to your satisfaction.",
                                    color: "from-blue-400 to-blue-500"
                                },
                                {
                                    icon: <IoIosSpeedometer className="text-3xl" />,
                                    title: "Fast, Reliable, Secure",
                                    description: "Lightning-fast load times with top-tier security measures for your peace of mind.",
                                    color: "from-green-400 to-green-500"
                                },
                                {
                                    icon: <GiStack className="text-3xl" />,
                                    title: "End-to-End Service",
                                    description: "From consultation to delivery — no surprises, just seamless execution.",
                                    color: "from-purple-400 to-purple-500"
                                },
                                {
                                    icon: <HiOutlineSupport className="text-3xl" />,
                                    title: "Post-Launch Support",
                                    description: "We're here for updates, troubleshooting, and ongoing maintenance.",
                                    color: "from-pink-400 to-pink-500"
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    data-observe
                                    id={`advantage-${index}`}
                                    className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-700 hover:scale-105 ${isVisible[`advantage-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white mb-4`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                                    <p className="text-sm text-blue-100">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How We Work */}
                <div data-observe id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl font-bold text-blue-600 mb-4 transition-all duration-700 ${isVisible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            HOW WE WORK
                        </h2>
                        <h3 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-700 delay-200 ${isVisible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Your journey to a better brand
                        </h3>
                        <p className={`text-xl text-gray-600 transition-all duration-700 delay-300 ${isVisible['process'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Simple, transparent, and in your language.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200"></div>
                        
                        {[
                            {
                                step: "01",
                                icon: <MdOutlineChat className="text-4xl" />,
                                title: "We Chat",
                                description: "Tell us your vision over coffee — virtual or physical.",
                                color: "from-blue-500 to-blue-600"
                            },
                            {
                                step: "02",
                                icon: <MdOutlineDesignServices className="text-4xl" />,
                                title: "We Create",
                                description: "We design, iterate, and tweak until it feels 100% right.",
                                color: "from-purple-500 to-purple-600"
                            },
                            {
                                step: "03",
                                icon: <MdRocketLaunch className="text-4xl" />,
                                title: "We Launch",
                                description: "Go live and ensure everything runs perfectly.",
                                color: "from-pink-500 to-pink-600"
                            },
                            {
                                step: "04",
                                icon: <BiCodeAlt className="text-4xl" />,
                                title: "We Grow With You",
                                description: "Ongoing support to keep your tech fresh and your business thriving.",
                                color: "from-orange-500 to-orange-600"
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                data-observe
                                id={`process-${index}`}
                                className={`relative text-center transition-all duration-700 ${isVisible[`process-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                                style={{ transitionDelay: `${index * 150}ms` }}
                            >
                                <div className="relative mb-6">
                                    <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center text-white shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300`}>
                                        {item.icon}
                                    </div>
                                    <span className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-700 shadow-lg border-2 border-gray-100">
                                        {item.step}
                                    </span>
                                </div>
                                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div data-observe id="cta" className="relative bg-gray-900 text-white py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full"></div>
                        <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white rounded-full"></div>
                    </div>
                    
                    <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Ready to Elevate Your Digital Presence?
                        </h2>
                        <p className={`text-xl text-gray-300 mb-10 transition-all duration-700 delay-200 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            Whether you need a brand new website, a logo refresh, or just some tech advice — we are here to help.
                        </p>
                        
                        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 transition-all duration-700 delay-400 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            <button
                                onClick={() => onNavigate && onNavigate('contact')}
                                className="group relative inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                                <span className="relative flex items-center gap-2">
                                    Let's Work Together
                                    <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button 
                                onClick={() => onNavigate && onNavigate('portfolio')}
                                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300">
                                View Our Portfolio
                            </button>
                        </div>

                        <div className={`flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 transition-all duration-700 delay-600 ${isVisible['cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                            {/* <a href="tel:+2349031183272" className="flex items-center gap-2 hover:text-white transition-colors">
                                <span className="text-2xl">📞</span>
                                +234 903 118 3272
                            </a>
                            <span className="hidden sm:block text-gray-600">|</span> */}
                            <a href="mailto:contact@amanisky.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <span className="text-2xl">✉️</span>
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Add necessary styles */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
                .animate-float {
                    animation: float 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default MainSection;