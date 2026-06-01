import { useState, useEffect } from 'react'
import Loader   from './components/Loader'
import Cursor   from './components/Cursor'
import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Marquee  from './components/Marquee'
import About    from './components/About'
import Work     from './components/Work'
import Services from './components/Services'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  const [siteVisible, setSiteVisible] = useState(false)

  // Wire up scroll-reveal once the site fades in
  useEffect(() => {
    if (!siteVisible) return

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          observer.unobserve(e.target)
        }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [siteVisible])

  return (
    <>
      <Cursor />
      <Loader onDone={() => setSiteVisible(true)} />
      <div id="site" className={siteVisible ? 'visible' : ''}>
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
