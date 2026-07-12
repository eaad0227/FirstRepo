export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              IT n Cloud Solutions
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
              <li><a href="#contact">Support Portal</a></li>
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
