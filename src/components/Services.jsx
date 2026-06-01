const SERVICES = [
  {
    icon: '01',
    name: 'PRODUCT ENGINEERING',
    desc: 'End-to-end development of digital products — from architecture and backend systems to polished, performant front-ends built to scale.',
  },
  {
    icon: '02',
    name: 'AI SOLUTIONS',
    desc: 'Integrating machine learning and AI into real products. From intelligent APIs and data pipelines to LLM-powered features that create genuine value.',
  },
  {
    icon: '03',
    name: 'PLATFORM DEVELOPMENT',
    desc: 'Cloud-native platforms and infrastructure built for reliability and growth. APIs, microservices, CMS systems, and enterprise integrations.',
  },
  {
    icon: '04',
    name: 'EXPERIENCE DESIGN',
    desc: 'Interfaces that feel as good as they look. Purposeful UX, design systems, and responsive front-ends that turn complexity into clarity.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-left">
          <div className="section-eyebrow reveal">SERVICES</div>
          <h2 className="services-heading reveal reveal-1">
            WHAT I<br /><em>BUILD</em>
          </h2>
          <p className="services-sub reveal reveal-2">
            Digital products that combine engineering, design, and artificial
            intelligence to solve complex problems at scale.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div
              key={s.icon}
              className={`service-card reveal${i > 0 ? ` reveal-${Math.min(i, 4)}` : ''}`}
            >
              <div className="svc-icon">{s.icon}</div>
              <div className="svc-name">{s.name}</div>
              <div className="svc-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
