import { motion } from 'framer-motion'
import { useCountdown } from '../hooks/useCountdown'

const units = [
  ['dias', 'Dias'],
  ['horas', 'Horas'],
  ['minutos', 'Min'],
  ['segundos', 'Seg'],
]

export function Countdown({ targetDate }) {
  const timeLeft = useCountdown(targetDate)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65 }}
      className="mx-auto mt-8 grid w-full max-w-md grid-cols-4 gap-2 sm:gap-3"
    >
      {units.map(([key, label]) => (
        <div
          key={key}
          className="flex aspect-square min-w-0 flex-col items-center justify-center rounded-lg border border-sky-100 bg-white/80 px-2 shadow-sm backdrop-blur"
        >
          <span className="font-serif text-2xl tabular-nums text-slate-700 sm:text-4xl">
            {String(timeLeft[key]).padStart(2, '0')}
          </span>
          <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-sky-500 sm:text-xs">
            {label}
          </span>
        </div>
      ))}
    </motion.div>
  )
}
