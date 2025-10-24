import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary/70 z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1600')] bg-cover bg-center" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 text-center px-4 max-w-4xl mx-auto"
      >
        <div className="mb-6 text-primary-foreground/90 text-sm md:text-base tracking-widest font-light">
          LOCAL CALGARY CHIROPRACTOR
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 tracking-tight">
          Michael Lau Chiropractic
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light tracking-wide">
          Professional Care for Your Wellness Journey
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
        >
          Book Online
        </Button>
      </motion.div>
    </section>
  )
}
