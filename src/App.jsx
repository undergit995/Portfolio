


import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Landing from './Component/Landing/Landing'
import Projects from './Component/Projects/Projects'
import About from './Component/Home/About'

function PageTransition({ children }) {
  const location = useLocation()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(false)
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [location])

  return (
    <div
      className={`transition-all duration-500 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  )
}

function AppInner() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setMenuOpen(false), [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e3d9] font-['Cormorant_Garamond',serif] flex flex-col">

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

          <Link
            to="/"
            className="font-['Playfair_Display',serif]  font-semibold tracking-[0.12em] uppercase text-[#e8e3d9] text-2xl font-bold tracking-tighter bg-gradient-to-b from-cyan-800 to-purple-200 bg-clip-text text-transparent hover:text-white transition-colors duration-300"
          >
            B Venkata Avinash
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative text-sm tracking-[0.18em] uppercase font-['Space_Mono',monospace] transition-colors duration-300 group
                    ${isActive ? 'text-white' : 'text-[#888] hover:text-[#e8e3d9]'}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        className={`absolute -bottom-0.5 left-0 h-px bg-white transition-all duration-300
                          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 border border-white/20 rounded-full
              text-xs tracking-[0.2em] uppercase font-['Space_Mono',monospace] text-[#e8e3d9]
              hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
          >
            Résumé
            <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 9.5l7-7M3 2.5h6.5v6.5" />
            </svg>
          </a>

          <button
            onClick={() => setMenuOpen(p => !p)}
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-6 bg-[#e8e3d9] origin-center transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-px w-4 bg-[#e8e3d9] transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#e8e3d9] origin-center transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${menuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-6 py-4 border-t border-white/[0.06] flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm tracking-[0.2em] uppercase font-['Space_Mono',monospace] transition-colors
                  ${isActive ? 'text-white' : 'text-[#888]'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tracking-[0.2em] uppercase font-['Space_Mono',monospace] text-[#888] hover:text-white transition-colors"
            >
              Résumé ↗
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 pt-16">
        <PageTransition>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </PageTransition>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <p className="text-xs tracking-[0.2em] uppercase text-[#444] font-['Space_Mono',monospace]">
            © 2026 B Venkata Avinash
          </p>
          <div className="flex items-center gap-5">
            {['GitHub', 'LinkedIn', 'Twitter'].map(s => (
              <a
                key={s}
                href="#"
                className="text-xs tracking-[0.15em] uppercase text-[#444] hover:text-[#e8e3d9] transition-colors duration-300 font-['Space_Mono',monospace]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}

export default App