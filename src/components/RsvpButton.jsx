import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const whatsappPhone = '527222611354'

function getRsvpText(invitado) {
  const familia = invitado?.isGeneric ? '[Nombre Familia]' : invitado.familia
  const personas = invitado?.boletos ?? '[X]'

  return `Hola, confirmo mi asistencia. ${familia}, seremos ${personas} personas.`
}

export function RsvpButton({ invitado }) {
  const whatsappUrl = `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(getRsvpText(invitado))}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="mx-auto mt-8 inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-sky-500 px-7 py-4 text-base font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.25)] transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
    >
      <MessageCircle className="h-5 w-5" />
      Confirmar asistencia
    </motion.a>
  )
}
