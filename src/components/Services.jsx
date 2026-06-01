const SERVICES = [
  {
    icon: '01',
    name: 'WEB DEVELOPMENT',
    desc: 'Full-stack web applications built with PHP, JavaScript, Python and modern frameworks. From marketing sites to enterprise platforms.',
  },
  {
    icon: '02',
    name: 'MOBILE APPLICATIONS',
    desc: 'Hybrid mobile apps using Ionic and Angular with Firebase backends. Native-quality experiences on both iOS and Android.',
  },
  {
    icon: '03',
    name: 'CMS DEVELOPMENT',
    desc: 'Custom Drupal, WordPress, SharePoint and DotNetNuke solutions. Complex content structures with tailored admin experiences.',
  },
  {
    icon: '04',
    name: 'SECURITY CONSULTING',
    desc: 'Penetration testing, vulnerability assessments and security audits. Helping organizations identify and remediate risk before attackers do.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-left">
          <div className="section-eyebrow reveal">SERVICES</div>
          <h2 className="services-heading reveal reveal-1">
            WHAT I<br /><em>DELIVER</em>
          </h2>
          <p className="services-sub reveal reveal-2">
            END-TO-END DIGITAL SOLUTIONS — FROM PIXEL-PERFECT UIs TO HARDENED
            BACKEND SYSTEMS AND SECURITY AUDITS.
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
