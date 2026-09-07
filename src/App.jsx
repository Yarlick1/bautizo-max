import { AnimatePresence, motion } from 'framer-motion'
import { Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { FloralDetails } from './components/FloralDetails'
import { InvitationIntro } from './components/InvitationIntro'
import { WelcomeCover } from './components/WelcomeCover'
import { useInvitado } from './hooks/useInvitado'

const priorityImages = [
  '/images/max/max25.webp',
  '/images/max/max09.webp',
  '/images/max/max11.webp',
]

const warmupImages = [
  '/images/max/max01.webp',
  '/images/max/max02.webp',
  '/images/max/max03.webp',
  '/images/max/max05.webp',
]

function preloadImages(images) {
  images.forEach((src) => {
    const image = new Image()
    image.decoding = 'async'
    image.src = src
  })
}

function runWhenIdle(callback) {
  if ('requestIdleCallback' in window) {
    const idleId = window.requestIdleCallback(callback, { timeout: 1800 })
    return () => window.cancelIdleCallback(idleId)
  }

  const timeoutId = window.setTimeout(callback, 700)
  return () => window.clearTimeout(timeoutId)
}

function App() {
  const invitado = useInvitado()
  const audioRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    preloadImages(priorityImages)
    return runWhenIdle(() => preloadImages(warmupImages))
  }, [])

  const handleOpenInvitation = async () => {
    setIsOpen(true)

    if (!audioRef.current) return

    try {
      audioRef.current.volume = 1
      audioRef.current.muted = isMuted
      await audioRef.current.play()
    } catch (error) {
      console.info('La musica de fondo no pudo reproducirse todavia.', error)
    }
  }

  const handleToggleMute = () => {
    setIsMuted((currentValue) => {
      const nextValue = !currentValue

      if (audioRef.current) {
        audioRef.current.muted = nextValue
      }

      return nextValue
    })
  }

  const AudioIcon = isMuted ? VolumeX : Volume2

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_40%,#fff7ed_100%)] text-slate-600">
      <audio ref={audioRef} loop preload="auto" src="/audio/audio-bautizo-maxi2.mp3" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <WelcomeCover invitado={invitado} onOpen={handleOpenInvitation} />
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <FloralDetails />
            <InvitationIntro invitado={invitado} />
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <motion.button
          type="button"
          onClick={handleToggleMute}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-4 right-4 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-sky-100 bg-white/70 text-sky-500 shadow-sm backdrop-blur transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
          aria-label={isMuted ? 'Activar musica' : 'Silenciar musica'}
        >
          <AudioIcon className="h-4 w-4" strokeWidth={1.8} />
        </motion.button>
      )}
    </main>
  )
}

export default App
