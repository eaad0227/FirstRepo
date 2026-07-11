import { useState } from 'react'

const contactItems = [
  {
    label: 'Phone',
    value: '+1 (754) 251-1550',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b9eff" strokeWidth="2" width="20" height="20">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@itncloudsolutions.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b9eff" strokeWidth="2" width="20" height="20">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Office',
    value: <>123 Tech Boulevard, Suite 400<br />San Jose, CA 95110</>,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b9eff" strokeWidth="2" width="20" height="20">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: 'Support Hours',
    value: '24/7 — 365 Days a Year',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#3b9eff" strokeWidth="2" width="20" height="20">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState(initialForm)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Website Inquiry from ' + form.firstName + ' ' + form.lastName)
    const body = encodeURIComponent(
      'First Name: ' + form.firstName + '\n' +
      'Last Name: ' + form.lastName + '\n' +
      'Business Email: ' + form.email + '\n' +
      'Company: ' + form.company + '\n' +
      'Service of Interest: ' + form.service + '\n\n' +
      'Message:\n' + form.message
    )
    window.location.href = 'mailto:info@itncloudsolutions.com?subject=' + subject + '&body=' + body
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="section-label">Contact Us</span>
            <h2 className="section-title">Let's Talk About Your IT Needs</h2>
            <p className="section-subtitle" style={{ marginBottom: '2.5rem' }}>
              Ready to take your IT infrastructure to the next level? Our team is here
              to help. Reach out and we'll get back to you within 24 hours.
            </p>
            <div className="contact-info">
              {contactItems.map(({ label, value, icon }) => (
                <div className="contact-info-item" key={label}>
                  <div className="contact-info-icon">{icon}</div>
                  <div className="contact-info-text">
                    <h4>{label}</h4>
                    <p>{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form">
            {submitted ? (
              <div className="form-success">
                <div className="form-success-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1a5fa8" strokeWidth="2.5" width="32" height="32">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will contact you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>First Name</label>
                      <input type="text" name="firstName" placeholder="John" required value={form.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label>Last Name</label>
                      <input type="text" name="lastName" placeholder="Smith" required value={form.lastName} onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Business Email</label>
                    <input type="email" name="email" placeholder="john@company.com" required value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" name="company" placeholder="Your Company Inc." value={form.company} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label>Service of Interest</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service...</option>
                      <option>Network Management</option>
                      <option>Cloud Solutions</option>
                      <option>Cybersecurity</option>
                      <option>Help Desk Support</option>
                      <option>Backup &amp; Recovery</option>
                      <option>IT Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" placeholder="Tell us about your IT needs..." required value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" className="btn-submit">Send Message →</button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
