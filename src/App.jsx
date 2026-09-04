import { AnimatePresence, motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { FloralDetails } from './components/FloralDetails'
import { InvitationIntro } from './components/InvitationIntro'
import { WelcomeCover } from './components/WelcomeCover'
import { useInvitado } from './hooks/useInvitado'

function App() {
  const invitado = useInvitado()
  const audioRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenInvitation = async () => {
    setIsOpen(true)

    if (!audioRef.current) return

    try {
      audioRef.current.volume = 0.35
      await audioRef.current.play()
    } catch (error) {
      console.info('La musica de fondo no pudo reproducirse todavia.', error)
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,#e0f2fe_0%,#f8fafc_40%,#fff7ed_100%)] text-slate-600">
      <audio ref={audioRef} loop preload="auto" src="/audio/musica-bautizo-max.mp3" />

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <WelcomeCover invitado={invitado} onOpen={handleOpenInvitation} />
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <FloralDetails />
            <InvitationIntro invitado={invitado} />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
