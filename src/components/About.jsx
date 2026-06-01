const SKILLS = [
  'PHP', 'Python', 'JavaScript', 'Angular', 'React', 'Vue.js',
  'Node.js', 'MEAN Stack', 'Ionic', 'Drupal', 'WordPress',
  'SharePoint', 'PostgreSQL', 'Firebase', 'ASP.NET', 'Penetration Testing',
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-sticky">
        <div className="section-eyebrow reveal">ABOUT</div>
        <h2 className="about-heading reveal reveal-1">
          DEVELOPER<br />
          WITH A<br />
          <em>DESIGNER&apos;S</em><br />
          EYE
        </h2>
      </div>

      <div className="about-right">
        <p className="about-bio reveal reveal-1">
          Currently based in <strong>Nairobi, Kenya</strong>, I&apos;m a full-stack
          developer with over <strong>5 years of experience</strong> building across
          PHP, Java, Python, JavaScript, and the MEAN stack. I work with HTML5, CSS3,
          and frameworks including Angular, React, and Vue.js.
          <br /><br />
          Beyond development, I&apos;m deeply passionate about{' '}
          <strong>Information Security</strong> — working as a consultant for various
          organizations, helping them identify vulnerabilities and build more resilient
          systems.
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
