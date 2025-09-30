import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'
import Home from './Home.jsx'
import About from './pages/About.jsx'
import Translation from './pages/Translation.jsx'
import Summarization from './pages/Summarization.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import HowToUse from './pages/HowToUse.jsx'
import logoUrl from './assets/logo.svg'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="nav">
          <div className="nav-left">
            <img src={logoUrl} alt="TransSummarize logo" className="logo-small" />
            <NavLink to="/" className="brand">TransSummarize</NavLink>
          </div>
          <nav className="nav-links">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/translate">Translation</NavLink>
            <NavLink to="/summarize">Summarization</NavLink>
            <NavLink to="/how-to-use">How to use</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/translate" element={<Translation />} />
            <Route path="/summarize" element={<Summarization />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <span>© {new Date().getFullYear()} TransSummarize</span>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
