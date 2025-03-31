import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}