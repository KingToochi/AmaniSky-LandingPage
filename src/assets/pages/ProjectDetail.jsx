import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

// Project data
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    copyrightYear: 2021,
    description: "A full-featured e-commerce store with payment integration and inventory management",
    shortDescription: "Full-featured e-commerce store",
    image: "https://images.unsplash.com/photo-1460925895917-adf4e9a3f916?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1460925895917-adf4e9a3f916?w=1200&h=600&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    details: {
      challenge: "Build a scalable e-commerce platform that can handle high traffic and multiple payment methods.",
      solution: "We developed a full-stack solution using React for the frontend and Node.js for the backend, integrated Stripe for secure payments, and MongoDB for flexible data storage.",
      results: "Successfully launched with 10,000+ monthly users, 99.9% uptime, and seamless payment processing.",
      features: [
        "Product catalog with advanced filtering",
        "Shopping cart and checkout process",
        "Payment integration with Stripe",
        "User authentication and profiles",
        "Admin dashboard for inventory management",
        "Order tracking and notifications"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Graphic Design",
    copyrightYear: 2021,
    description: "Complete branding package including logo, color palette, and brand guidelines",
    shortDescription: "Complete branding package",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    technologies: ["Figma", "Adobe Creative Suite"],
    details: {
      challenge: "Create a cohesive brand identity for a startup that reflects innovation and trust.",
      solution: "Conducted brand discovery sessions, created multiple logo concepts, developed a comprehensive color palette, and designed detailed brand guidelines.",
      results: "Client launched with a strong visual identity that resonates with their target audience and increased brand recognition by 45%.",
      features: [
        "Logo design and variations",
        "Color palette and typography system",
        "Brand guidelines document",
        "Business card design",
        "Email signature templates",
        "Social media templates"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    category: "Web Development",
    copyrightYear: 2021,
    description: "Analytics dashboard with real-time data visualization and user management",
    shortDescription: "Analytics dashboard platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    technologies: ["React", "Firebase", "Chart.js"],
    details: {
      challenge: "Build a real-time analytics dashboard that processes large datasets efficiently.",
      solution: "Utilized React for dynamic UI, Firebase for real-time data updates, and Chart.js for beautiful data visualizations.",
      results: "Dashboard processes 50,000+ events per day with sub-second latency, serving 200+ enterprise clients.",
      features: [
        "Real-time data visualization",
        "Custom chart types",
        "User management system",
        "Report generation",
        "Data export functionality",
        "Team collaboration tools"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 4,
    title: "Social Media Campaign",
    category: "Social Media",
    copyrightYear: 2022,
    description: "Comprehensive social media strategy and content creation for tech startup",
    shortDescription: "Social media strategy",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=600&fit=crop",
    technologies: ["Content Creation", "Analytics"],
    details: {
      challenge: "Build brand awareness for a new tech startup with limited budget.",
      solution: "Created engaging content strategy, produced high-quality graphics and videos, and optimized posting schedules.",
      results: "Grew followers by 300%, increased engagement by 150%, and generated $50K in qualified leads.",
      features: [
        "Content calendar planning",
        "Graphic design for posts",
        "Video content creation",
        "Community management",
        "Analytics and reporting",
        "Influencer partnerships"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 5,
    title: "Mobile App Development",
    category: "App Development",
    copyrightYear: 2022,
    description: "Cross-platform mobile app for fitness tracking with social features",
    shortDescription: "Fitness tracking mobile app",
    image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=1200&h=600&fit=crop",
    technologies: ["React Native", "Firebase", "Redux"],
    details: {
      challenge: "Develop a cross-platform fitness app with social connectivity.",
      solution: "Built with React Native for iOS and Android, Firebase for backend, and Redux for state management.",
      results: "Launched successfully with 50K+ downloads in first month, 4.8-star rating on app stores.",
      features: [
        "Workout tracking",
        "Social feed",
        "Friend connections",
        "Leaderboards",
        "Push notifications",
        "Apple Health integration"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 6,
    title: "Portfolio Website",
    category: "Web Development",
    copyrightYear: 2022,
    description: "Stunning portfolio website for creative professional with animations",
    shortDescription: "Creative portfolio site",
    image: "https://images.unsplash.com/photo-1467232557287-142d922e7e11?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1467232557287-142d922e7e11?w=1200&h=600&fit=crop",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    details: {
      challenge: "Create an impressive portfolio that showcases creative work while maintaining fast performance.",
      solution: "Used Next.js for SSR and performance, Tailwind for styling, and Framer Motion for smooth animations.",
      results: "Portfolio received design awards and helped client land 5+ new projects within 3 months.",
      features: [
        "Smooth scroll animations",
        "Project showcase",
        "Contact form",
        "Blog section",
        "Dark mode toggle",
        "SEO optimized"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 7,
    title: "Logo & Icon Design",
    category: "Graphic Design",
    copyrightYear: 2023,
    description: "Professional logo and icon set for mobile application",
    shortDescription: "Logo and icon set",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=1200&h=600&fit=crop",
    technologies: ["Adobe Illustrator", "Figma"],
    details: {
      challenge: "Design a versatile logo and icon set that works across all platforms.",
      solution: "Created scalable vector designs using Adobe Illustrator, tested across all device sizes.",
      results: "Logo and icon set became instantly recognizable with 95% brand recall in user testing.",
      features: [
        "Logo variations",
        "App icon designs",
        "Social media icons",
        "System icons",
        "Scalable SVG versions",
        "Usage guidelines"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 8,
    title: "Content Management System",
    category: "Web Development",
    copyrightYear: 2023,
    description: "Custom CMS for managing blog posts and media with role-based access",
    shortDescription: "Custom CMS platform",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    technologies: ["Vue.js", "Django", "PostgreSQL"],
    details: {
      challenge: "Build a CMS that's easy to use for non-technical content creators.",
      solution: "Developed with Vue.js frontend for intuitive UI, Django backend for robustness, PostgreSQL for data integrity.",
      results: "Reduced content publishing time by 60%, used by 50+ content creators across the organization.",
      features: [
        "WYSIWYG editor",
        "Media library",
        "Role-based access",
        "Scheduling",
        "Version history",
        "API integration"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 9,
    title: "Video Marketing Campaign",
    category: "Marketing",
    copyrightYear: 2023,
    description: "Professional video production and marketing campaign for product launch",
    shortDescription: "Video marketing campaign",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=1200&h=600&fit=crop",
    technologies: ["Video Production", "Editing"],
    details: {
      challenge: "Create compelling video content that drives product awareness and sales.",
      solution: "Produced multiple video assets including product demos, testimonials, and explainer videos.",
      results: "Campaign videos generated 2M+ views, 15% click-through rate, and contributed to $200K in sales.",
      features: [
        "Product demo videos",
        "Testimonial videos",
        "Explainer videos",
        "Social media clips",
        "YouTube optimization",
        "Analytics tracking"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 10,
    title: "Business Website",
    category: "Web Development",
    copyrightYear: 2024,
    description: "Corporate website with service showcase and contact forms",
    shortDescription: "Corporate website",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=600&fit=crop",
    technologies: ["React", "Tailwind CSS", "Node.js"],
    details: {
      challenge: "Build a professional corporate website that generates qualified leads.",
      solution: "Created responsive design with clear value propositions, optimized CTAs, and integrated lead capture forms.",
      results: "Generated 500+ qualified leads in first quarter, 25% conversion rate to customers.",
      features: [
        "Service showcase",
        "Team profiles",
        "Case studies",
        "Contact forms",
        "Blog integration",
        "Lead tracking"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 11,
    title: "UI/UX Design System",
    category: "Graphic Design",
    copyrightYear: 2024,
    description: "Complete design system with component library and design tokens",
    shortDescription: "Design system",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    technologies: ["Figma", "Design Tokens"],
    details: {
      challenge: "Create a consistent design system across multiple product lines.",
      solution: "Documented design tokens, created reusable component library in Figma, and established design guidelines.",
      results: "Design-to-development time reduced by 40%, consistency improved across all products.",
      features: [
        "Component library",
        "Design tokens",
        "Typography system",
        "Color palette",
        "Icon library",
        "Documentation"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 12,
    title: "E-Learning Platform",
    category: "Web Development",
    copyrightYear: 2024,
    description: "Interactive online learning platform with course management and student tracking",
    shortDescription: "E-learning platform",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1516321318423-f06f70d504f0?w=1200&h=600&fit=crop",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    details: {
      challenge: "Build an e-learning platform that engages students and tracks their progress.",
      solution: "Developed interactive course interface, integrated payment system, and built comprehensive analytics.",
      results: "Platform hosts 5,000+ students with 95% course completion rate and generated $500K revenue.",
      features: [
        "Video courses",
        "Quizzes and assessments",
        "Progress tracking",
        "Certificates",
        "Student forums",
        "Payment processing"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 13,
    title: "Brand Guidelines Design",
    category: "Graphic Design",
    copyrightYear: 2025,
    description: "Comprehensive brand guidelines document with typography and usage rules",
    shortDescription: "Brand guidelines",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    technologies: ["Figma", "InDesign"],
    details: {
      challenge: "Create comprehensive guidelines that ensure consistent brand presentation.",
      solution: "Documented logo usage, typography, color specifications, imagery style, and tone of voice.",
      results: "Guidelines adopted by all departments, ensuring 100% brand consistency across communications.",
      features: [
        "Logo guidelines",
        "Color specifications",
        "Typography system",
        "Photography style",
        "Tone and voice",
        "Usage examples"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 14,
    title: "Real Estate Website",
    category: "Web Development",
    copyrightYear: 2025,
    description: "Property listing website with advanced search filters and virtual tours",
    shortDescription: "Real estate platform",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=600&fit=crop",
    technologies: ["React", "Google Maps API", "Firebase"],
    details: {
      challenge: "Build a real estate platform with advanced filtering and immersive property viewing.",
      solution: "Integrated Google Maps, implemented 360-degree virtual tours, built intelligent filtering system.",
      results: "Processes 1M+ monthly visits, average session duration increased by 300%.",
      features: [
        "Property listings",
        "Advanced filtering",
        "Virtual tours",
        "Map integration",
        "Favorites list",
        "Contact agents"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 15,
    title: "Influencer Campaign",
    category: "Social Media",
    copyrightYear: 2025,
    description: "Multi-platform influencer marketing campaign with content calendar",
    shortDescription: "Influencer campaign",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=600&fit=crop",
    technologies: ["Content Strategy", "Analytics"],
    details: {
      challenge: "Launch an influencer campaign that reaches target demographics effectively.",
      solution: "Identified relevant influencers, coordinated content calendars, and tracked performance metrics.",
      results: "Campaign reached 5M+ users, generated 500K+ impressions, and achieved 8% engagement rate.",
      features: [
        "Influencer partnerships",
        "Content calendar",
        "Performance tracking",
        "Audience analytics",
        "ROI measurement",
        "Reporting"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 16,
    title: "Web Application Redesign",
    category: "Web Development",
    copyrightYear: 2026,
    description: "Complete redesign and modernization of legacy web application",
    shortDescription: "Web app modernization",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    details: {
      challenge: "Modernize a legacy application while maintaining existing functionality.",
      solution: "Migrated to React, added TypeScript for type safety, implemented new design system.",
      results: "Load time reduced by 70%, user satisfaction increased from 62% to 92%, developer productivity improved by 50%.",
      features: [
        "Modern UI/UX",
        "Improved performance",
        "Mobile responsiveness",
        "Accessibility features",
        "Better code organization",
        "Enhanced user experience"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 17,
    title: "Print Design Package",
    category: "Graphic Design",
    copyrightYear: 2026,
    description: "Business cards, letterheads, and brochure design package",
    shortDescription: "Print design package",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    technologies: ["Adobe InDesign", "Illustrator"],
    details: {
      challenge: "Design cohesive print materials that reinforce brand identity.",
      solution: "Created custom designs optimized for print, coordinated across multiple formats.",
      results: "Print materials increased brand perception by 35%, ordered 50K+ units for distribution.",
      features: [
        "Business cards",
        "Letterheads",
        "Envelopes",
        "Brochures",
        "Packaging design",
        "Print-ready files"
      ]
    },
    links: { github: "#", demo: "#" }
  },
  {
    id: 18,
    title: "API Development",
    category: "Web Development",
    copyrightYear: 2026,
    description: "RESTful API with authentication, rate limiting, and comprehensive documentation",
    shortDescription: "RESTful API",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
    fullImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB"],
    details: {
      challenge: "Build a scalable API that handles high traffic with robust security.",
      solution: "Implemented JWT authentication, rate limiting, comprehensive logging, and detailed API documentation.",
      results: "API serves 100M+ requests monthly with 99.99% uptime, used by 30+ third-party applications.",
      features: [
        "JWT authentication",
        "Rate limiting",
        "Comprehensive logging",
        "API documentation",
        "Error handling",
        "Scalable architecture"
      ]
    },
    links: { github: "#", demo: "#" }
  }
];

const ProjectDetail = ({ projectId, onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const project = projectsData.find(p => p.id === parseInt(projectId));

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            <FaArrowLeft /> Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-blue-50/30 to-white min-h-screen pt-32 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => onNavigate('portfolio')}
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors mb-8"
        >
          <FaArrowLeft className="text-lg" />
          Back to Portfolio
        </button>

        {/* Project Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <BsStars className="text-blue-600" />
            <span className="text-blue-800 font-semibold">{project.category}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
              {project.title}
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">{project.description}</p>
        </div>

        {/* Featured Image */}
        <div className={`mb-16 rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '200ms' }}>
          <img src={project.fullImage} alt={project.title} className="w-full h-auto object-cover" />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Challenge */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}>
              <h2 className="text-3xl font-bold mb-4">The Challenge</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.details.challenge}</p>
            </div>

            {/* Solution */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '500ms' }}>
              <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{project.details.solution}</p>
            </div>

            {/* Results */}
            <div className={`bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '600ms' }}>
              <h2 className="text-3xl font-bold mb-4">Results & Impact</h2>
              <p className="text-lg leading-relaxed">{project.details.results}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Technologies */}
            <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-bold mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '500ms' }}>
              <h3 className="text-xl font-bold mb-4">Project Links</h3>
              <div className="space-y-3">
                <a
                  href={project.links.github}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors p-3 hover:bg-blue-50 rounded-lg"
                >
                  <FaGithub className="text-xl" />
                  View Code
                </a>
                <a
                  href={project.links.demo}
                  className="flex items-center gap-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors p-3 hover:bg-blue-50 rounded-lg"
                >
                  <FaExternalLinkAlt className="text-xl" />
                  Live Demo
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-bold mb-4">Copyright</h3>
              <p className="text-gray-300 leading-relaxed">
                © {project.copyrightYear} <span className="font-semibold">AmaniSky NexTech</span>
              </p>
              <p className="text-gray-400 text-sm mt-3">
                All rights reserved. This work is protected by copyright law.
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`bg-white rounded-2xl p-12 shadow-xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '700ms' }}>
          <h2 className="text-3xl font-bold mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.details.features.map((feature, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white font-bold">
                    ✓
                  </div>
                </div>
                <div>
                  <p className="text-lg font-semibold text-gray-900">{feature}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 rounded-3xl p-12 text-white mt-20 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '800ms' }}>
          <h2 className="text-4xl font-bold mb-4">Interested in a Similar Project?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss how we can help bring your vision to life.</p>
          <button className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
