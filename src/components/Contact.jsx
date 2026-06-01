import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => {
      setSent(false)
      e.target.reset()
    }, 3500)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-eyebrow reveal">GET IN TOUCH</div>

      <h2 className="contact-headline reveal reveal-1">
        LET&apos;S<br /><span className="hl">WORK</span><br />TOGETHER
      </h2>

      <a
        href="mailto:humphrey.asante@gmail.com"
        className="contact-email reveal reveal-2"
      >
        HUMPHREY.ASANTE@GMAIL.COM
      </a>

      <div className="contact-links reveal reveal-3">
        <a href="https://github.com/humphreymburu" target="_blank" rel="noopener noreferrer" className="contact-link">GITHUB</a>
        <a href="https://twitter.com/HumphreyMburu" target="_blank" rel="noopener noreferrer" className="contact-link">TWITTER</a>
        <a href="https://www.linkedin.com/in/humphreymburu" target="_blank" rel="noopener noreferrer" className="contact-link">LINKEDIN</a>
      </div>

      <form className="contact-form reveal reveal-3" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label className="f-label" htmlFor="fn">NAME</label>
            <input className="f-input" id="fn" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label className="f-label" htmlFor="fe">EMAIL</label>
            <input className="f-input" id="fe" type="email" placeholder="your@email.com" required />
          </div>
        </div>
        <div className="form-full">
          <div className="form-field">
            <label className="f-label" htmlFor="fm">MESSAGE</label>
            <textarea className="f-textarea" id="fm" placeholder="Tell me about your project..." required></textarea>
          </div>
        </div>
        <button type="submit" className={`btn-submit${sent ? ' sent' : ''}`}>
          <span>{sent ? 'MESSAGE SENT!' : 'SEND MESSAGE'}</span>
          <span>{sent ? '✓' : '→'}</span>
        </button>
      </form>
    </section>
  )
}
