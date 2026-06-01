import { useEffect } from 'react'

export default function PortfolioModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" onClick={e => e.stopPropagation()}>
        <button className="close-modal-btn" onClick={onClose} aria-label="Close">
          <i className="fas fa-times"></i>
        </button>

        <h2 className="text-uppercase">{project.title}</h2>
        <p className="item-intro text-muted">{project.techStack}</p>

        <img
          className="img-fluid d-block mx-auto"
          src={project.full}
          alt={project.title}
        />

        <p>{project.description}</p>

        {project.loginInfo && (
          <p className="login-info">
            <strong>{project.loginInfo}</strong>
          </p>
        )}

        <ul className="list-inline">
          <li className="list-inline-item">Category: {project.categoryLabel}</li>
        </ul>

        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          <i className="fas fa-external-link-alt"></i> Visit
        </a>
        <button className="btn btn-primary ml-2" onClick={onClose}>
          <i className="fas fa-times"></i> Close
        </button>
      </div>
    </div>
  )
}
