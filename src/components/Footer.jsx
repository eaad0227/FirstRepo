export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.jpg" alt="IT N Cloud Solutions" style={{ height: '44px', borderRadius: '6px', display: 'block' }} />
            </div>
            <p>
              Your trusted partner for managed IT services and cloud solutions.
              Keeping your business secure, connected, and productive.
            </p>
          </div>

          <div>
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Network Management</a></li>
              <li><a href="#services">Cloud Solutions</a></li>
              <li><a href="#services">Cybersecurity</a></li>
              <li><a href="#services">Help Desk Support</a></li>
              <li><a href="#services">Backup &amp; Recovery</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#about">Our Team</a></li>
              <li><a href="#contact">Careers</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <ul className="footer-links">
              <li><a href="tel:+17542511550">+1 (754) 251-1550</a></li>
              <li><a href="mailto:info@itncloudsolutions.com">info@itncloudsolutions.com</a></li>
              <li><a href="#contact">Get a Free Quote</a></li>
              <li><a href="https://assist.italegroup.com/client/itncloudsolutions" target="_blank" rel="noopener noreferrer">Support Portal</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} IT n Cloud Solutions. All rights reserved.</span>
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </div>
    </footer>
  )
}
