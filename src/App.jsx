import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServicesCarousel from './components/ServicesCarousel'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServicesCarousel />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
