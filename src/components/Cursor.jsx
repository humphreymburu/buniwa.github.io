import { useEffect, useRef } from 'react'

export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const pos  = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const cur    = curRef.current
    const ringEl = ringRef.current
    let rafId

    const onMove = (e) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
      cur.style.left = e.clientX + 'px'
      cur.style.top  = e.clientY + 'px'
    }

    const lerp = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15
      ring.current.y += (pos.current.y - ring.current.y) * 0.15
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top  = ring.current.y + 'px'
      rafId = requestAnimationFrame(lerp)
    }

    const SELECTOR = 'a, button, .project-row, .service-card, .skill-tag'
    const onOver = (e) => {
      if (e.target.closest(SELECTOR)) {
        cur.classList.add('expanded')
        ringEl.classList.add('expanded')
      }
    }
    const onOut = (e) => {
      if (e.target.closest(SELECTOR)) {
        cur.classList.remove('expanded')
        ringEl.classList.remove('expanded')
      }
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafId = requestAnimationFrame(lerp)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={curRef}></div>
      <div className="cursor-ring" ref={ringRef}></div>
    </>
  )
}
