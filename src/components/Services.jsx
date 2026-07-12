import { services } from '../servicesData'

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-header centered">
          <span className="section-label">What We Do</span>
          <h2 className="section-title">Comprehensive IT Services</h2>
          <p className="section-subtitle">
            From day-to-day IT management to AI-powered automation and long-term
            cloud strategy, we deliver the expertise your business needs to thrive.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
