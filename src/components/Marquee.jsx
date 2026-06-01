const ITEMS = [
  'PHP', 'React', 'Angular', 'Node.js', 'Python',
  'Drupal', 'Ionic', 'Firebase', 'PostgreSQL', 'Infosec',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee-strip" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div key={i} className="m-item">
            {item} <span>✦</span>
          </div>
        ))}
      </div>
    </div>
  )
}
