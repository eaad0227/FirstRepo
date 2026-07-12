const stats = [
  { number: '10+', label: 'Years in Business' },
  { number: '500+', label: 'Happy Clients' },
  { number: '50+', label: 'IT Professionals' },
  { number: '99.9%', label: 'Uptime SLA' },
]

const values = [
  { title: 'Reliability', description: 'Consistent, dependable IT services you can count on every day.' },
  { title: 'Expertise', description: 'Certified professionals with deep knowledge across all IT domains.' },
  { title: 'Partnership', description: 'We work as an extension of your team, not just a vendor.' },
  { title: 'Innovation', description: 'Staying ahead of technology trends to keep your business competitive.' },
]

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title">Empowering Businesses Through Technology</h2>
            <p>
              IT n Cloud Solutions is a premier Managed Service Provider with over a decade of
              experience helping businesses of all sizes harness the power of modern technology.
              We partner with organizations to design, implement, and manage IT infrastructure
              that drives real results.
            </p>
            <p>
              Our team of certified IT professionals brings deep expertise across networking,
              cloud platforms, cybersecurity, and enterprise software — ensuring your technology
              always works for you, not against you.
            </p>
            <a href="#contact" className="btn btn-blue" style={{ marginTop: '1.25rem' }}>
              Work With Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div>
            <div className="about-stats">
              {stats.map(({ number, label }) => (
                <div className="stat-box" key={label}>
                  <div className="stat-box-number">{number}</div>
                  <div className="stat-box-label">{label}</div>
                </div>
              ))}
            </div>
            <div className="about-values">
              {values.map(({ title, description }) => (
                <div className="value-card" key={title}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
