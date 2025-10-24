import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Conditions } from './components/Conditions'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Testimonials />
      <Conditions />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App