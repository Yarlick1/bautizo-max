import { useEffect, useMemo, useRef, useState } from 'react'
import { galleryPhotos } from '../data/images'

const scrollSpeed = 34
const initialVisiblePhotos = 8
const loadBatchSize = 4

function runWhenIdle(callback) {
  if ('requestIdleCallback' in window) {
    const idleId = window.requestIdleCallback(callback, { timeout: 1200 })
    return () => window.cancelIdleCallback(idleId)
  }

  const timeoutId = window.setTimeout(callback, 500)
  return () => window.clearTimeout(timeoutId)
}

export function PhotoCarousel() {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const lastTimeRef = useRef(0)
  const [cycleWidth, setCycleWidth] = useState(0)
  const [visibleCount, setVisibleCount] = useState(() => Math.min(initialVisiblePhotos, galleryPhotos.length))
  const visiblePhotos = useMemo(() => galleryPhotos.slice(0, visibleCount), [visibleCount])
  const loopedPhotos = useMemo(() => [...visiblePhotos, ...visiblePhotos], [visiblePhotos])

  useEffect(() => {
    if (visibleCount >= galleryPhotos.length) return undefined

    return runWhenIdle(() => {
      setVisibleCount((currentValue) => Math.min(currentValue + loadBatchSize, galleryPhotos.length))
    })
  }, [visibleCount])

  useEffect(() => {
    const updateCycleWidth = () => {
      if (!trackRef.current) return
      setCycleWidth(trackRef.current.scrollWidth / 2)
    }

    updateCycleWidth()
    window.addEventListener('resize', updateCycleWidth)

    return () => window.removeEventListener('resize', updateCycleWidth)
  }, [visibleCount])

  useEffect(() => {
    let animationFrameId

    const animate = (time) => {
      if (!lastTimeRef.current) lastTimeRef.current = time
      const delta = time - lastTimeRef.current
      lastTimeRef.current = time

      if (cycleWidth > 0 && trackRef.current) {
        offsetRef.current = (offsetRef.current + (delta / 1000) * scrollSpeed) % cycleWidth
        trackRef.current.style.transform = 'translate3d(-' + offsetRef.current + 'px, 0, 0)'
      }

      animationFrameId = window.requestAnimationFrame(animate)
    }

    animationFrameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(animationFrameId)
  }, [cycleWidth])

  return (
    <section className="w-full overflow-hidden py-14">
      <div className="mx-auto max-w-3xl px-5 text-center">
        <p className="font-script text-4xl text-sky-500">Esperamos contar con su presencia.</p>
      </div>

      <div className="mt-8 overflow-hidden">
        <div ref={trackRef} className="flex w-max gap-4 px-5 will-change-transform">
          {loopedPhotos.map((photo, index) => (
            <figure
              key={photo + '-' + index}
              className="h-64 w-48 shrink-0 overflow-hidden rounded-lg border border-white bg-white shadow-sm sm:h-80 sm:w-60"
            >
              <img
                src={photo}
                alt="maxi"
                className="h-full w-full object-cover"
                draggable="false"
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
