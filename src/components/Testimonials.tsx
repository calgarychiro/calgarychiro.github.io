import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CaretLeft, CaretRight, Star } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Eph Frame',
    rating: 5,
    text: "Mike is friendly, professional and genuine. He's very thorough with his assessments and adjustments. Every time I go see him I never feel like I'm being rushed because he listens to your concerns and addresses them.",
    date: '4 months ago',
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Dr. Lau has been instrumental in my recovery from chronic back pain. His holistic approach and attention to detail have made a tremendous difference in my quality of life.',
    date: '2 months ago',
  },
  {
    name: 'David Chen',
    rating: 5,
    text: 'Outstanding service! The clinic is clean, modern, and welcoming. Dr. Lau takes the time to explain everything and creates personalized treatment plans.',
    date: '1 month ago',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Patient Testimonials</h2>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              <Card className="shadow-lg">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} weight="fill" className="text-accent" size={20} />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl text-foreground/90 mb-6 leading-relaxed">
                    "{testimonials[current].text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                      <p className="text-sm text-muted-foreground">{testimonials[current].date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prev}>
              <CaretLeft />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > current ? 1 : -1)
                    setCurrent(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'w-8 bg-accent' : 'w-2 bg-border'
                  }`}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next}>
              <CaretRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
