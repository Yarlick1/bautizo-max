import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function ArticleImageSlider({ images = [], alt = '' }) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return undefined

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 3600)

    return () => window.clearInterval(intervalId)
  }, [images.length])

  if (!images.length) return null

  return (
    <div className="relative mt-5 h-40 w-full overflow-hidden rounded-lg border border-sky-100 bg-sky-50 shadow-sm">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[activeIndex]}
          src={images[activeIndex]}
          alt={alt}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="h-full w-full object-cover"
          draggable="false"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((image, index) => (
            <span
              key={image}
              className={`h-1.5 rounded-full transition-all ${
                index === activeIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
