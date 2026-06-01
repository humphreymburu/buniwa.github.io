import { projects } from '../data/projects'

export default function Work() {
  return (
    <section className="work" id="work">
      <div className="work-header reveal">
        <h2 className="work-title">
          SELECTED<br /><em>WORK</em>
        </h2>
        <div className="work-count">{String(projects.length).padStart(2, '0')} PROJECTS</div>
      </div>

      <div className="projects-list">
        {projects.map((p, i) => {
          const delayClass = i === 0 ? '' : ` reveal-${Math.min(Math.ceil(i / 2), 4)}`
          const Tag = p.url ? 'a' : 'div'
          const extra = p.url
            ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Tag
              key={p.id}
              className={`project-row reveal${delayClass}`}
              {...extra}
            >
              <div className="proj-num">{p.num}</div>
              <div className="proj-info">
                <div className="proj-name">{p.title}</div>
                <div className="proj-sub">{p.sub}</div>
              </div>
              <div className="proj-tags">
                {p.tags.map(t => (
                  <span key={t} className="proj-tag">{t}</span>
                ))}
              </div>
              <div className="proj-arrow">↗</div>
            </Tag>
          )
        })}
      </div>
    </section>
  )
}
