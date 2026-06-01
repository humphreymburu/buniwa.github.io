export default function Footer() {
  return (
    <footer>
      <div className="footer-copy">
        © {new Date().getFullYear()} HUMPHREY MBURU · NAIROBI, KENYA
      </div>
      <div className="footer-right">
        <a href="https://github.com/humphreymburu" target="_blank" rel="noopener noreferrer" className="footer-link">GITHUB</a>
        <a href="https://twitter.com/HumphreyMburu" target="_blank" rel="noopener noreferrer" className="footer-link">TWITTER</a>
        <a href="mailto:humphrey.asante@gmail.com" className="footer-link">EMAIL</a>
      </div>
    </footer>
  )
}
