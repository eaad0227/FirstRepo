export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Trusted Managed IT Services
          </div>

          <h1>
            Your Trusted Partner for{' '}
            <span>IT &amp; Cloud</span> Services
          </h1>

          <p>
            We help businesses stay secure, connected, and productive with
            comprehensive managed IT solutions — tailored to meet your unique
            needs and designed to scale with your growth.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Consultation
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#services" className="btn btn-outline">
              Explore Services
            </a>
          </div>

          <div className="hero-stats">
            {[
              { number: '10+', label: 'Years of Experience' },
              { number: '500+', label: 'Clients Served' },
              { number: '99.9%', label: 'Uptime Guarantee' },
              { number: '24/7', label: 'Expert Support' },
            ].map(({ number, label }) => (
              <div key={label}>
                <div className="hero-stat-number">{number}</div>
                <div className="hero-stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
