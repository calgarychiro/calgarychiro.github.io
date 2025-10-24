import { useState } from 'react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Conditions } from './components/Conditions'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { BlogNavigator } from './components/BlogNavigator'
import { Toaster } from './components/ui/sonner'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'blog-navigator'>('home')

  if (currentPage === 'blog-navigator') {
    return (
      <div className="min-h-screen">
        <Navigation onNavigate={(page) => setCurrentPage(page)} currentPage={currentPage} />
        <div className="pt-16 md:pt-20">
          <BlogNavigator />
        </div>
        <Footer />
        <Toaster />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Navigation onNavigate={(page) => setCurrentPage(page)} currentPage={currentPage} />
      <Hero />
      <About />
      <Testimonials />
      <Conditions />
      <Gallery />
      <Blog onNavigateToBlogPage={() => setCurrentPage('blog-navigator')} />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}

export default App