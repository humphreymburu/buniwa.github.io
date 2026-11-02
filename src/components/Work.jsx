import { useEffect, useState } from 'react'
import { projects } from '../data/projects'

const TABS = [
  { label: 'All', slug: 'all', category: null },
  { label: 'AI', slug: 'ai', category: 'ai' },
  { label: 'Web Apps', slug: 'web-apps', category: 'web apps' },
  { label: 'Websites', slug: 'websites', category: 'websites' },
  { label: 'Mobile', slug: 'mobile', category: 'mobile' },
  { label: 'Other', slug: 'other', category: 'other' },
]

function tabFromLocation() {
  const slug = new URLSearchParams(window.location.search).get('tab')
  return TABS.find(tab => tab.slug === slug) ?? TABS[0]
}

function tabHref(tab) {
  const params = new URLSearchParams(window.location.search)

  if (tab.slug === TABS[0].slug) params.delete('tab')
  else params.set('tab', tab.slug)

  const query = params.toString()
  return `${window.location.pathname}${query ? `?${query}` : ''}#work`
}

export default function Work() {
  const [activeTab, setActiveTab] = useState(tabFromLocation)

  // Keep the tab in sync with the URL when using browser back/forward.
  useEffect(() => {
    const onPopState = () => setActiveTab(tabFromLocation())
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const selectTab = tab => {
    if (tab.slug === activeTab.slug) return

    const url = new URL(window.location.href)

    if (tab.slug === TABS[0].slug) url.searchParams.delete('tab')
    else url.searchParams.set('tab', tab.slug)

    url.hash = 'work'
    window.history.pushState({ tab: tab.slug }, '', url)
    setActiveTab(tab)
  }

  const visible = activeTab.category
    ? projects.filter(p => p.category === activeTab.category)
    : projects

  const featured = visible.filter(p => p.featured)
  const list = visible.filter(p => !p.featured)

  return (
    <section className="work" id="work">
      <div className="work-header reveal">
        <h2 className="work-title">
          SELECTED<br /><em>WORK</em>
        </h2>
        <div className="work-count">{String(projects.length).padStart(2, '0')} PROJECTS</div>
      </div>

      <div className="work-tabs reveal">
        {TABS.map(tab => (
          <a
            key={tab.slug}
            href={tabHref(tab)}
            className={`tab-btn${activeTab.slug === tab.slug ? ' active' : ''}`}
            aria-current={activeTab.slug === tab.slug ? 'page' : undefined}
            onClick={e => {
              // Let modified clicks and middle-clicks open the shareable URL normally.
              if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
              e.preventDefault()
              selectTab(tab)
            }}
          >
            {tab.label}
          </a>
        ))}
      </div>

      {featured.length > 0 && (
        <div className="featured-grid">
          {featured.map(p => {
            const FeaturedTag = p.url ? 'a' : 'div'
            const extra = p.url
              ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
              : {}

            return (
              <FeaturedTag key={p.id} className="featured-project" {...extra}>
                <div
                  className="featured-media"
                  style={p.imageRatio ? { aspectRatio: p.imageRatio } : undefined}
                >
                  <img
                    src={p.image}
                    alt={p.imageAlt || `${p.title} interface`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="featured-body">
                  <h3 className="featured-name">{p.title}</h3>
                  <p className="featured-sub">{p.sub}</p>
                  <p className="featured-desc">{p.description}</p>

                  <div className="featured-foot">
                    <span className="featured-num">{p.num}</span>

                    <div className="featured-tags">
                      {p.tags.map(t => (
                        <span key={t} className="proj-tag">{t}</span>
                      ))}
                    </div>

                    {p.url && (
                      <span className="featured-cta">View live site</span>
                    )}
                  </div>
                </div>
              </FeaturedTag>
            )
          })}
        </div>
      )}

      <div className="projects-list">
        {list.map((p, i) => {
          const delayClass = i === 0 ? '' : ` reveal-${Math.min(Math.ceil(i / 2), 4)}`
          const Tag = p.url ? 'a' : 'div'
          const extra = p.url
            ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
            : {}

          return (
            <Tag
              key={p.id}
              className={`project-row${p.image ? ' has-thumb' : ''}${delayClass}`}
              {...extra}
            >
              <div className="proj-num">{p.num}</div>

              {p.image && (
                <div
                  className="proj-thumb"
                  style={p.imageRatio ? { aspectRatio: p.imageRatio } : undefined}
                >
                  <img src={p.image} alt="" loading="lazy" decoding="async" />
                </div>
              )}

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
