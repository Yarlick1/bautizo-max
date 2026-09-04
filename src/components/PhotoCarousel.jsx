import { motion } from 'framer-motion'

const photos = [
  '/images/baby-placeholder.svg',
  '/images/gallery-1.svg',
  '/images/gallery-2.svg',
  '/images/gallery-3.svg',
]

export function PhotoCarousel() {
  const loopedPhotos = [...photos, ...photos]

  return (
    <section className="w-full overflow-hidden py-14">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-script text-4xl text-sky-500">Esperamos contar con su presencia.</p>
      </div>

      <div className="mt-8 overflow-hidden">
        <motion.div
          className="flex w-max gap-4 px-5"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 28, ease: 'linear', repeat: Infinity }}
        >
          {loopedPhotos.map((photo, index) => (
            <figure
              key={`${photo}-${index}`}
              className="h-64 w-48 shrink-0 overflow-hidden rounded-lg border border-white bg-white shadow-sm sm:h-80 sm:w-60"
            >
              <img
                src={photo}
                alt="Foto generica del bautizo"
                className="h-full w-full object-cover"
                draggable="false"
              />
            </figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
