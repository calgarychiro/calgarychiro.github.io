import { useState, useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/

import review002 from '/data/reviews/022_Screen

import review006 from '/data/reviews/030_Screen+Shot+2020-10-14+at+12.07.08+PM.png.webp'
import review008 from '/data/reviews/032_Screen+Shot+2020-10-14+at+12.10.31+PM.png.webp'
import review010 from '/data/reviews/034_Screen+Shot+2020-10-14+at+12.05.49+PM.png.webp'
import review012 from '/data/reviews/036_Screen+Shot+2020-05-05+at+1.56.48+PM.png.webp'
const reviewImages = [
  { url: review002, alt: 'Patient Review 2' },
  { url: review004, alt: 'Patient Review 4' },
  { url: review006, alt: 'Patient Review 6' },
  { url: review008, alt: 'Patient Review 8' },
  { url: review010, alt: 'Patient Review 10' },
  { url: review012, alt: 'Patient Review 12' },


  useEffect(() => {
      setCurrentSlide((prev) => (prev + 1) % r

  }, [])
  const nextSlide = () => {
  }
  const prevSlide = () => {
  }
  return (
      <div className="container mx-auto px-4 m
        <p className="text-center text-muted-fo
        </p>
        <div className="max-w-4xl mx-auto">
 

                animate={{ 
                transition={{ duration: 0.5 }}

                  s
                  className="w-full h
              </motion.div>


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




















































