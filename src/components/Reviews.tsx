import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

import review002 from '/data/reviews/022_Screen+Shot+2020-10-14+at+12.10.01+PM.png.webp'
import review004 from '/data/reviews/024_Screen+Shot+2020-10-14+at+12.07.22+PM.png.webp'
import review006 from '/data/reviews/030_Screen+Shot+2020-10-14+at+12.07.08+PM.png.webp'
import review008 from '/data/reviews/032_Screen+Shot+2020-10-14+at+12.10.31+PM.png.webp'
import review010 from '/data/reviews/034_Screen+Shot+2020-10-14+at+12.05.49+PM.png.webp'
import review012 from '/data/reviews/036_Screen+Shot+2020-05-05+at+1.56.48+PM.png.webp'
import review014 from '/data/reviews/039_Screen+Shot+2020-05-05+at+1.56.44+PM.png.webp'
import review016 from '/data/reviews/042_Screen+Shot+2020-10-14+at+12.06.01+PM.png.webp'

const reviewImages = [
  { url: review002, alt: 'Patient Review 2' },
  { url: review004, alt: 'Patient Review 4' },
  { url: review006, alt: 'Patient Review 6' },
  { url: review008, alt: 'Patient Review 8' },
  { url: review010, alt: 'Patient Review 10' },
  { url: review012, alt: 'Patient Review 12' },
  { url: review014, alt: 'Patient Review 14' },
  { url: review016, alt: 'Patient Review 16' },
]

export function Reviews() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviewImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reviewImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reviewImages.length) % reviewImages.length)
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Patient Reviews</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real feedback from our valued patients
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-2xl bg-muted">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={reviewImages[currentSlide].url}
                  alt={reviewImages[currentSlide].alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
              onClick={prevSlide}
            >
              <CaretLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full"
              onClick={nextSlide}
            >
              <CaretRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {reviewImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'bg-primary w-8' : 'bg-background/60'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
