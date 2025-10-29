import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { motion, AnimatePresence } from 'framer-motion'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'

import image1 from '/data/michael/063_image-asset.jpeg.webp'
import image2 from '/data/michael/066_image-asset.jpeg.webp'
import image3 from '/data/michael/167_image-asset.jpeg.webp'
import image4 from '/data/michael/168_image-asset.jpeg.webp'
import image5 from '/data/michael/195_image-asset.jpeg.webp'
import image6 from '/data/michael/213_image-asset.jpeg.webp'
import image7 from '/data/michael/224_image-asset.jpeg.webp'
import image8 from '/data/michael/454_IMG_0156.jpg.webp'

const galleryImages = [
  {
    url: image1,
    alt: 'Dr. Michael Lau - Professional photo 1',
  },
  {
    url: image2,
    alt: 'Dr. Michael Lau - Professional photo 2',
  },
  {
    url: image3,
    alt: 'Dr. Michael Lau - Professional photo 3',
  },
  {
    url: image4,
    alt: 'Dr. Michael Lau - Professional photo 4',
  },
  {
    url: image5,
    alt: 'Dr. Michael Lau - Professional photo 5',
  },
  {
    url: image6,
    alt: 'Dr. Michael Lau - Professional photo 6',
  },
  {
    url: image7,
    alt: 'Dr. Michael Lau - Professional photo 7',
  },
  {
    url: image8,
    alt: 'Dr. Michael Lau - Professional photo 8',
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience professional chiropractic care in a modern, welcoming environment
        </p>

        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg shadow-2xl bg-muted">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={galleryImages[currentSlide].url}
                  alt={galleryImages[currentSlide].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setSelectedImage(currentSlide)}
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
              {galleryImages.map((_, index) => (
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

          <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative aspect-square overflow-hidden rounded-md cursor-pointer ${
                  index === currentSlide ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl">
            {selectedImage !== null && (
              <img
                src={galleryImages[selectedImage].url}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-auto rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
