import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

// Project data with over 15 projects (updated descriptions and images)
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    copyrightYear: 2021,
    description: "B2C e‑commerce for fashion retailer — cart conversion optimization",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Graphic Design",
    copyrightYear: 2021,
    description: "Logo, color system and brand guidelines for fintech startup",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Figma", "Adobe Creative Suite"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "Web Development",
    copyrightYear: 2021,
    description: "Real‑time analytics dashboard enabling customer insights and retention",
    image: "https://images.unsplash.com/photo-1555949963-2436b8f5a6d8?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Socket.io", "Chart.js"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Media",
    copyrightYear: 2022,
    description: "30‑day launch campaign that grew engagement 4x for a product debut",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    technologies: ["Content Creation", "Analytics"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 5,
    title: "Fitness Mobile App",
    category: "App Development",
    copyrightYear: 2022,
    description: "Cross‑platform fitness tracker with social sharing and challenges",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    technologies: ["React Native", "Firebase", "Redux"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 6,
    title: "Creative Portfolio Website",
    category: "Web Development",
    copyrightYear: 2022,
    description: "Showcase site for a photographer with micro‑interactions and fast load",
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=800&q=80",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 7,
    title: "Logo & Icon Set",
    category: "Graphic Design",
    copyrightYear: 2023,
    description: "Custom iconography and logo for mobile marketplace",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=800&q=80",
    technologies: ["Adobe Illustrator", "Figma"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 8,
    title: "Content Management System",
    category: "Web Development",
    copyrightYear: 2023,
    description: "Headless CMS powering editorial workflows and multi‑site publishing",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 9,
    title: "Video Marketing Campaign",
    category: "Marketing",
    copyrightYear: 2023,
    description: "Product launch video series that improved demo requests by 28%",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?auto=format&fit=crop&w=800&q=80",
    technologies: ["Video Production", "Editing"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 10,
    title: "Corporate Website",
    category: "Web Development",
    copyrightYear: 2024,
    description: "Lead‑focused corporate site with integrated contact flows and CMS",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 11,
    title: "Design System",
    category: "Graphic Design",
    copyrightYear: 2024,
    description: "Reusable component library and tokens to scale product UI",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Figma", "Design Tokens"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 12,
    title: "E‑Learning Platform",
    category: "Web Development",
    copyrightYear: 2024,
    description: "Scalable course platform with progress tracking and payments",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 13,
    title: "Brand Guidelines",
    category: "Graphic Design",
    copyrightYear: 2025,
    description: "Visual system and usage rules to maintain brand consistency",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Figma", "InDesign"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 14,
    title: "Real Estate Platform",
    category: "Web Development",
    copyrightYear: 2025,
    description: "Property search with saved searches, maps and virtual tours",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Google Maps API", "Firebase"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 15,
    title: "Influencer Campaign",
    category: "Social Media",
    copyrightYear: 2025,
    description: "Coordinated influencer strategy that increased reach across platforms",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    technologies: ["Content Strategy", "Analytics"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 16,
    title: "Legacy Web App Redesign",
    category: "Web Development",
    copyrightYear: 2026,
    description: "Modernized a legacy app to improve performance and developer velocity",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 17,
    title: "Print & Collateral",
    category: "Graphic Design",
    copyrightYear: 2026,
    description: "Printed collateral set including brochures and business collateral",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    technologies: ["Adobe InDesign", "Illustrator"],
    links: { github: "#", demo: "#" }
  },
  {
    id: 18,
    title: "API & Integrations",
    category: "Web Development",
    copyrightYear: 2026,
    description: "Secure REST API with webhooks and third‑party integrations",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    technologies: ["Node.js", "Express", "MongoDB"],
    links: { github: "#", demo: "#" }
  }
];

const categories = ["All", ...new Set(projectsData.map(p => p.category))];

// Stats data
const stats = {
  totalProjects: projectsData.length,
  totalClients: 45,
  yearsExperience: 5,
  projectsCompleted: projectsData.length
};

const Portfolio = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

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
    <div className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white min-h-screen pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div data-observe id="portfolio-header" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="text-center">
            <div className={`inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${isVisible['portfolio-header'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <BsStars className="text-blue-600" />
              <span className="text-blue-800 font-semibold">OUR PORTFOLIO</span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 transition-all duration-700 delay-200 ${isVisible['portfolio-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                Our Creative Journey
              </span>
            </h1>
            <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-700 delay-300 ${isVisible['portfolio-header'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Explore our collection of successful projects that demonstrate our expertise in web development, design, and digital solutions.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div data-observe id="portfolio-stats" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Projects Completed", value: stats.totalProjects, icon: "🎯" },
              { label: "Happy Clients", value: stats.totalClients, icon: "😊" },
              { label: "Years Experience", value: stats.yearsExperience, icon: "⭐" },
              { label: "Services Offered", value: "10+", icon: "🚀" }
            ].map((stat, index) => (
              <div
                key={index}
                data-observe
                id={`stat-${index}`}
                className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center transform transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl ${isVisible[`stat-${index}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <p className="text-blue-100 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div data-observe id="category-filter" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className={`flex flex-wrap gap-4 justify-center transition-all duration-700 ${isVisible['category-filter'] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                data-observe
                id={`project-${project.id}`}
                onClick={() => onSelectProject && onSelectProject(project.id)}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-700 cursor-pointer hover:-translate-y-2 ${isVisible[`project-${project.id}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-400 to-purple-500">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex gap-4">
                      <a
                        href={project.links.github}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        title="GitHub"
                      >
                        <FaGithub className="text-white text-xl" />
                      </a>
                      <a
                        href={project.links.demo}
                        onClick={(e) => e.stopPropagation()}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all"
                        title="Live Demo"
                      >
                        <FaExternalLinkAlt className="text-white text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject && onSelectProject(project.id);
                    }}
                    className="w-full flex items-center justify-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group/btn mb-4"
                  >
                    View Project
                    <FaArrowRight className="group-hover/btn:translate-x-1 transition-transform text-sm" />
                  </button>

                  {/* Copyright */}
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">© {project.copyrightYear} <span className="font-semibold">AmaniSky NexTech</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div data-observe id="portfolio-cta" className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 py-20 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white rounded-full"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${isVisible['portfolio-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Ready to Start Your Project?
            </h2>
            <p className={`text-xl text-blue-100 mb-10 transition-all duration-700 delay-200 ${isVisible['portfolio-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Let's create something amazing together. Get in touch with our team today.
            </p>
            <button className={`inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 ${isVisible['portfolio-cta'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Get Started
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
