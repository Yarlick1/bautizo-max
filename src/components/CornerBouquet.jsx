import { motion } from 'framer-motion'

function Leaf({ d, fill = '#c7d2fe', opacity = 0.8 }) {
  return <path d={d} fill={fill} opacity={opacity} />
}

function CompassBloom({ cx, cy, size }) {
  return (
    <g transform={'translate(' + cx + ' ' + cy + ') scale(' + size + ')'}>
      <path d="M0-34 10-8 36 0 10 8 0 34-10 8-36 0-10-8z" fill="#dbeafe" stroke="#93c5fd" strokeWidth="3" />
      <circle cx="0" cy="0" r="10" fill="#64748b" opacity="0.72" />
    </g>
  )
}

function MiniPlane({ x, y, rotate = 0, scale = 1 }) {
  return (
    <g transform={'translate(' + x + ' ' + y + ') rotate(' + rotate + ') scale(' + scale + ')'} fill="none" stroke="#60a5fa" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
      <path d="M4 20 74 4 46 58 34 34 4 20z" fill="#eff6ff" />
      <path d="M34 34 74 4" />
      <path d="M46 58 31 44" />
    </g>
  )
}

export function CornerBouquet() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 270 235"
      initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute -right-10 -top-8 z-20 h-44 w-52 sm:-right-4 sm:top-0 sm:h-56 sm:w-64"
    >
      <Leaf d="M58 94c-28-17-49-16-65 1 16 23 42 27 75 11" fill="#bfdbfe" opacity="0.72" />
      <Leaf d="M159 58c10-34 32-53 65-55 6 33-11 59-48 77" fill="#dbeafe" opacity="0.92" />
      <Leaf d="M172 146c35-12 64-5 86 20-27 22-59 20-93-8" fill="#cbd5e1" opacity="0.68" />
      <Leaf d="M92 164c-36-2-63 10-82 36 31 15 61 7 88-25" fill="#e0f2fe" opacity="0.9" />
      <Leaf d="M128 108c-29-33-31-63-6-90 29 21 38 53 18 98" fill="#bae6fd" opacity="0.72" />
      <CompassBloom cx="91" cy="93" size="0.74" />
      <CompassBloom cx="144" cy="78" size="0.88" />
      <CompassBloom cx="184" cy="124" size="0.68" />
      <CompassBloom cx="119" cy="145" size="0.62" />
      <MiniPlane x="172" y="40" rotate="-18" scale="0.42" />
      <path d="M184 38c18-18 36-25 56-21" stroke="#93c5fd" strokeWidth="3" strokeDasharray="8 8" fill="none" opacity="0.7" />
    </motion.svg>
  )
}
