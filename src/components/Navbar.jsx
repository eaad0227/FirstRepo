import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const close = () => setMobileOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            IT n Cloud Solutions
          </a>
          <ul className="navbar-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact" className="navbar-cta">Get Started</a></li>
          </ul>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        <a href="#services" onClick={close}>Services</a>
        <a href="#about" onClick={close}>About</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a href="#contact" onClick={close}>Get Started →</a>
      </div>
    </header>
  )
}
