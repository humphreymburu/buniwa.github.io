const SKILLS = [
  'TypeScript', 'React', 'Next.js', 'NestJS', 'Python',
  'Node.js', 'Drupal', 'WordPress', 'PostgreSQL', 'Firebase',
  'REST APIs', 'GraphQL', 'AWS', 'Docker', 'AI / LLMs',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-sticky">
        <div className="section-eyebrow reveal">ABOUT</div>
        <h2 className="about-heading reveal reveal-1">
          FULL-STACK<br />
          PRODUCT<br />
          <em>ENGINEER</em>
        </h2>
      </div>

      <div className="about-right">
        <p className="about-bio reveal reveal-1">
          Based in <strong>Nairobi, Kenya</strong>, I&apos;m a Full-Stack Developer
          and AI Engineer with <strong>5+ years of experience</strong> building
          scalable web applications, enterprise platforms, and intelligent systems
          for global organizations.
          <br /><br />
          I specialize in <strong>TypeScript, React, Next.js, NestJS, Python,
          Drupal</strong>, cloud infrastructure, and AI-powered solutions —
          combining engineering excellence with a strong focus on user experience
          and performance.
        </p>

        <div className="skills-block reveal reveal-2">
          <div className="skills-title">TECHNOLOGY STACK</div>
          <div className="skills-tags">
            {SKILLS.map(s => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>

        <div className="stats-row reveal reveal-3">
          <div className="stat-box">
            <div className="stat-n">5+</div>
            <div className="stat-l">YEARS EXP.</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">9</div>
            <div className="stat-l">PROJECTS</div>
          </div>
          <div className="stat-box">
            <div className="stat-n">∞</div>
            <div className="stat-l">CURIOSITY</div>
          </div>
        </div>
      </div>
    </section>
  )
}
