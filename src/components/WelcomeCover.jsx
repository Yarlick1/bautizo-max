import { motion } from 'framer-motion'
import { Cross, Heart, MailOpen, Sparkles } from 'lucide-react'

export function WelcomeCover({ onOpen }) {
  return (
    <motion.section
      key="cover"
      exit={{ opacity: 0, y: -48, scale: 0.98 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="relative grid min-h-screen place-items-center overflow-hidden px-5 py-8"
    >
      <div className="absolute inset-0 bg-sky-50" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white via-sky-50 to-transparent" />
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-orange-50/70 to-transparent" />
      <div className="absolute left-1/2 top-8 h-36 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-200 to-transparent" />

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-10 flex h-16 w-16 items-center justify-center rounded-full border border-sky-100 bg-white/80 shadow-lg shadow-sky-100/70 backdrop-blur"
      >
        <Cross className="h-8 w-8 text-sky-500" strokeWidth={1.4} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto mt-20 flex w-full max-w-md flex-col items-center text-center"
      >
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-sky-600 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4" />
          Bautizo
        </div>

        <p className="max-w-sm text-pretty font-serif text-xl leading-8 text-slate-500">
          Tenemos el honor de invitarte al bautizo de
        </p>

        <h1 className="mt-4 text-balance font-script text-6xl leading-none text-slate-700 sm:text-7xl">
          Louis Maximiliano
        </h1>

        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Heart className="h-4 w-4 fill-sky-100 text-sky-400" strokeWidth={1.6} />
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
            Una celebración de fe, amor y gratitud para compartir en familia.
          </p>
          <Heart className="h-4 w-4 fill-sky-100 text-sky-400" strokeWidth={1.6} />
        </div>



        <motion.button
          type="button"
          onClick={onOpen}
          whileHover={{ y: -4, rotate: -1 }}
          whileTap={{ scale: 0.98 }}
          className="group relative mt-10 h-36 w-64 overflow-visible rounded-lg outline-none focus-visible:ring-4 focus-visible:ring-sky-200 [perspective:900px]"
          aria-label="Abrir invitación"
        >
          <span className="absolute inset-x-4 bottom-0 h-24 rounded-lg border border-sky-100 bg-white shadow-xl shadow-sky-100/70 transition-transform duration-500 group-hover:translate-y-1" />
          <span className="absolute inset-x-4 bottom-0 h-24 overflow-hidden rounded-lg border border-sky-100 bg-sky-50">
            <span className="absolute left-0 top-0 h-full w-full bg-white [clip-path:polygon(0_0,50%_56%,100%_0,100%_100%,0_100%)]" />
            <span className="absolute inset-x-0 bottom-0 h-16 bg-sky-100/70 [clip-path:polygon(0_100%,50%_18%,100%_100%)]" />
          </span>
          <span className="absolute left-4 right-4 top-3 h-20 origin-bottom rounded-t-lg border border-sky-100 bg-white transition-transform duration-500 [clip-path:polygon(0_0,100%_0,50%_100%)] group-hover:[transform:rotateX(-18deg)]" />
          <span className="absolute left-1/2 top-16 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-sky-100 bg-sky-500 text-white shadow-lg shadow-sky-200 transition-colors group-hover:bg-sky-600">
            <MailOpen className="h-5 w-5" />
          </span>
          <span className="absolute bottom-4 left-0 right-0 text-sm font-semibold text-slate-600">
            Abrir invitación
          </span>
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
