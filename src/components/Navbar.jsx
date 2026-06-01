import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">HM ✦ DEV</a>

      <ul className="nav-links">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#work">WORK</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>

      <div className="nav-avail">
        <div className="avail-dot"></div>
        OPEN TO WORK
      </div>
    </nav>
  )
}
