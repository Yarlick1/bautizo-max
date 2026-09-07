import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const heroPhotos = [
  '/images/max/max25.webp',
  '/images/max/max09.webp',
  '/images/max/max11.webp',
]

export function HeroPhotoSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    heroPhotos.forEach((photo) => {
      const image = new Image()
      image.src = photo
    })
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroPhotos.length)
    }, 3800)

    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mb-8 h-92 w-76 overflow-hidden rounded-lg border-4 border-white bg-sky-50 shadow-[0_22px_70px_rgba(125,211,252,0.34)] sm:h-96 sm:w-72"
    >
      {heroPhotos.map((photo, index) => {
        const isActive = index === activeIndex

        return (
          <motion.img
            key={photo}
            src={photo}
            alt="Foto de Louis Maximiliano"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.025,
            }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ zIndex: isActive ? 2 : 1 }}
            draggable="false"
            loading="eager"
            decoding="async"
          />
        )
      })}

      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {heroPhotos.map((photo, index) => (
          <span
            key={photo}
            className={'h-1.5 rounded-full transition-all duration-300 ' + (index === activeIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/60')}
          />
        ))}
      </div>
    </motion.figure>
  )
}
