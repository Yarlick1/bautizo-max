import { motion } from 'framer-motion'
import { Baby, Heart } from 'lucide-react'
import { CornerBouquet } from './CornerBouquet'
import { Countdown } from './Countdown'
import { EventDetails } from './EventDetails'
import { PhotoCarousel } from './PhotoCarousel'
import { RsvpButton } from './RsvpButton'

const eventDate = '2026-10-03T12:00:00-06:00'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.28 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

export function InvitationIntro({ invitado }) {
  return (
    <div className="relative z-10">
      <section className="relative mx-auto flex gap-3 min-h-screen w-full max-w-4xl flex-col items-center justify-center px-5 text-center">
        <CornerBouquet />

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45 }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-500"
        >
          Mi bautizo
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
          className="mt-4 text-balance font-script text-6xl font-semibold leading-tight text-slate-700 sm:text-7xl"
        >
          Louis <br /> Maximiliano
        </motion.h1>

        <motion.figure
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative mb-8 h-92 w-76 overflow-hidden rounded-lg border-4 border-white bg-white shadow-[0_22px_70px_rgba(125,211,252,0.34)] sm:h-96 sm:w-72"
        >
          <img
            src="/images/baby-placeholder.svg"
            alt="Espacio para foto de Louis Maximiliano"
            className="h-full w-full object-cover"
          />
        </motion.figure>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.32 }}
          className="max-w-xl text-pretty font-serif text-2xl leading-tight text-sky-500 sm:text-5xl"
        >
          Que la luz de Dios guíe siempre mi camino
        </motion.p>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12 text-center">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl">
          <Baby className="mx-auto h-8 w-8 text-sky-400" strokeWidth={1.6} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">
            Con amor
          </p>
          <h2 className="-mt-1 font-script text-5xl font-semibold text-slate-700">
            Mamá y Papá
          </h2>
          <p className="space-y-3 font-serif text-slate-400 font-light leading-7">
            Blanca Jacqueline Perez Peñaloza
          </p>
          <p className="space-y-3 font-serif text-slate-400 font-light leading-7">
            José Luis Hernández Ortiz
          </p>
          <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-sky-500">
            Y mis padrinos
          </p>
          <p className="space-y-3 font-serif text-slate-400 font-light leading-7">
            Janette Perez Gómez
          </p>
          <p className="space-y-3 font-serif text-slate-400 font-light leading-7">
            Luis Adolfo Benitez Guasso
          </p>
          {/* <p className="mx-auto mt-8 inline-flex rounded-full border border-sky-100 bg-white/70 px-4 py-2 text-sm text-slate-400">
            Invitación especial para {invitado.familia}
          </p> */}
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12 text-center">
        <motion.div {...fadeUp} className="rounded-lg border border-sky-100 bg-white/72 px-5 py-10 shadow-sm backdrop-blur">
          <Heart className="mx-auto h-8 w-8 text-sky-400" strokeWidth={1.6} />
          <p className="mt-5 font-script text-4xl text-sky-500">Sábado</p>
          <h2 className="mt-2 font-serif text-4xl text-slate-700 sm:text-5xl">
            3 de octubre de 2026
          </h2>
          <Countdown targetDate={eventDate} />
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-5 py-12 text-center">
        <motion.div {...fadeUp}>
          <p className="font-script text-4xl text-sky-500">Acompáñanos</p>
        </motion.div>
        <EventDetails />
      </section>

      <section className="mx-auto w-full max-w-3xl px-5 py-14 text-center">
        <motion.div {...fadeUp} className="rounded-lg border border-sky-100 bg-white/76 px-6 py-10 shadow-sm backdrop-blur">
          <p className="font-script text-4xl text-sky-500 sm:text-5xl">Gracias por acompañarnos</p>
          <p className="mx-auto mt-5 max-w-xl font-serif text-pretty text-lg leading-8 text-slate-500">
            Tu presencia hará más especial este momento tan importante para nuestra familia.
          </p>
          <RsvpButton invitado={invitado} />
        </motion.div>
      </section>

      <PhotoCarousel />
    </div>
  )
}
