import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  const [lang, setLang] = useState('pt'); // Default to Portuguese per user request implication
  const [theme, setTheme] = useState('dark');

  return (
    <div className="app-container">
      <Navbar lang={lang} setLang={setLang} theme={theme} setTheme={setTheme} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Projects lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default App
