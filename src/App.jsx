import { useState } from 'react'
import Header from './assets/components/Header'
import LandingPage from './assets/pages/LandingPage'
import Service from './assets/pages/Service'
import Process from './assets/pages/Process'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'

const pages = {
  home: <LandingPage />,
  services: <Service />,
  process: <Process />,
  about: <About />,
  contact: <Contact />
}

function App() {
  const [activePage, setActivePage] = useState('home')

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main>{pages[activePage]}</main>
    </div>
  )
}

export default App
