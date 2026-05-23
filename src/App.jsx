import { useState } from 'react'
import Header from './assets/components/Header'
import QuoteModal from './assets/components/QuoteModal'
import LandingPage from './assets/pages/LandingPage'
import Service from './assets/pages/Service'
import Process from './assets/pages/Process'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import Portfolio from './assets/pages/Portfolio'
import ProjectDetail from './assets/pages/ProjectDetail'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const [isQuoteOpen, setIsQuoteOpen] = useState(false)

  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId)
    setActivePage('projectDetail')
  }

  const pages = {
    home: <LandingPage onNavigate={setActivePage} />,
    services: <Service onNavigate={setActivePage} onOpenQuote={() => setIsQuoteOpen(true)} />,
    portfolio: <Portfolio onSelectProject={handleSelectProject} />,
    projectDetail: <ProjectDetail projectId={selectedProjectId} onNavigate={setActivePage} />,
    process: <Process onNavigate={setActivePage} />,
    about: <About />,
    contact: <Contact />
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>{pages[activePage]}</main>
      <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </div>
  )
}

export default App
