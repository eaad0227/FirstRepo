import { useState, useEffect, useRef } from 'react'
import { services } from '../servicesData'

const AUTOPLAY_MS = 5000

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef(null)

  const count = services.length
  const goTo = (i) => setCurrent((i + count) % count)
  const next = () => goTo(current + 1)
  const prev = () => goTo(current - 1)

  useEffect(() => {
    if (paused) return
    timer.current = setInterval(() => {
      setCurrent((c) => (c + 1) % count)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer.current)
  }, [paused, count])

  return (
    <section
      className="carousel"
      aria-label="Our services"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {services.map((s) => (
          <div className="carousel-slide" key={s.title}>
            <div className="container carousel-slide-inner">
              <div className="carousel-icon">{s.icon}</div>
              <div className="carousel-text">
                <span className="carousel-eyebrow">Our Services</span>
                <h2>{s.title}</h2>
                <p>{s.description}</p>
                <a href="#contact" className="btn btn-primary carousel-cta">
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="16" height="16">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-arrow carousel-arrow-prev" onClick={prev} aria-label="Previous service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button className="carousel-arrow carousel-arrow-next" onClick={next} aria-label="Next service">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="24" height="24">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>

      <div className="carousel-dots">
        {services.map((s, i) => (
          <button
            key={s.title}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to ${s.title}`}
          />
        ))}
      </div>
    </section>
  )
}
