export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay"></div>
      <div className="hero-location">NAIROBI · KENYA</div>

      <p className="hero-tag">FULL-STACK DEVELOPER</p>

      <h1 className="hero-headline">
        BUILDING<br />
        <em>EXPERIENCES</em>
      </h1>

      <div className="hero-bottom">
        <p className="hero-desc">
          <strong>Humphrey Mburu</strong> — Full-Stack Developer based in
          Nairobi, Kenya. Building scalable web applications, AI-powered
          solutions, and digital products for global organizations.
        </p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-fill">VIEW WORK →</a>
          <a href="#contact" className="btn btn-outline">GET IN TOUCH</a>
        </div>

        <div className="hero-scroll">
          <div className="hero-scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>
    </section>
  )
}
