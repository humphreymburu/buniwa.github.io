import { useState, useEffect } from 'react'

export default function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [done, setDone] = useState(false)
  const [panelsGone, setPanelsGone] = useState(false)

  useEffect(() => {
    const DURATION = 2200
    const start = performance.now()

    function easeInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    }

    let rafId
    function tick(now) {
      const t = Math.min((now - start) / DURATION, 1)
      setPct(Math.round(easeInOut(t) * 100))

      if (t < 1) {
        rafId = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setPanelsGone(true)
          setDone(true)
          setTimeout(onDone, 400)
        }, 120)
      }
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [onDone])

  return (
    <>
      <div id="loader" className={done ? 'done' : ''}>
        <div id="loader-left">
          <div id="loader-label">LOADING PORTFOLIO</div>
          <div id="loader-name">HUMPHREY MBURU</div>
        </div>
        <div id="loader-counter">{pct}</div>
        <div id="loader-bar-wrap">
          <div id="loader-bar" style={{ width: `${pct}%` }}></div>
        </div>
      </div>
      <div id="loader-panel-top" className={panelsGone ? 'gone' : ''}></div>
      <div id="loader-panel-bottom" className={panelsGone ? 'gone' : ''}></div>
    </>
  )
}
