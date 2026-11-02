import { useState } from 'react'
import { projects } from '../data/projects'
import PortfolioModal from './PortfolioModal'

const FILTERS = ['All', 'AI', 'Web Apps', 'Websites', 'Mobile', 'Other']

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selected, setSelected] = useState(null)

  const filterKey = activeFilter === 'All' ? null : activeFilter.toLowerCase()

  const visible = !filterKey
    ? projects
    : projects.filter(p => p.category === filterKey)

  return (
    <section id="download" className="portfolio-section">
      <h2>Portfolio</h2>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`btn btn-default filter-button${activeFilter === f ? ' active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="row portfolio-grid">
          {visible.map(project => (
            <div key={project.id} className="col-md-4 col-sm-6 portfolio-item">
              <a
                href="#"
                className="portfolio-link"
                onClick={e => { e.preventDefault(); setSelected(project) }}
              >
                <div className="portfolio-hover">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
                <img
                  className="img-fluid"
                  src={project.thumb}
                  alt={project.title}
                />
              </a>
              <div className="portfolio-caption">
                <h4>{project.title}</h4>
                <p className="text-muted">{project.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <PortfolioModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
