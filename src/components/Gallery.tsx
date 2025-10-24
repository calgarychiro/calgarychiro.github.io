import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800',
    alt: 'Patient assessment',
  },
  {
    url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800',
    alt: 'Chiropractic adjustment',
  },
  {
    url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    alt: 'Treatment room',
  },
  {
    url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800',
    alt: 'Posture assessment',
  },
  {
    url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800',
    alt: 'Spinal adjustment',
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
    alt: 'Patient care',
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <section id="services" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Experience professional chiropractic care in a modern, welcoming environment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
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
