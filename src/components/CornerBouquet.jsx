import { motion } from 'framer-motion'

function Bloom({ cx, cy, size, fill = '#ffffff', stroke = '#bae6fd' }) {
  return (
    <g transform={`translate(${cx} ${cy}) scale(${size})`}>
      <circle cx="0" cy="-18" r="18" fill={fill} stroke={stroke} strokeWidth="3" />
      <circle cx="18" cy="0" r="18" fill={fill} stroke={stroke} strokeWidth="3" />
      <circle cx="0" cy="18" r="18" fill={fill} stroke={stroke} strokeWidth="3" />
      <circle cx="-18" cy="0" r="18" fill={fill} stroke={stroke} strokeWidth="3" />
      <circle cx="0" cy="0" r="12" fill="#fde68a" opacity="0.86" />
    </g>
  )
}

export function CornerBouquet() {
  return (
    <motion.svg
      aria-hidden="true"
      viewBox="0 0 260 230"
      initial={{ opacity: 0, scale: 0.9, rotate: 8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none absolute -right-10 -top-8 z-20 h-44 w-52 sm:-right-4 sm:top-0 sm:h-56 sm:w-64"
    >
      <path d="M74 84c-28-12-48-8-62 12 19 18 41 19 66 2" fill="#dbeafe" opacity="0.8" />
      <path d="M165 58c11-31 32-47 62-45 2 30-15 51-49 64" fill="#e0f2fe" opacity="0.92" />
      <path d="M168 152c33-7 58 1 74 26-27 16-54 10-81-19" fill="#bfdbfe" opacity="0.72" />
      <path d="M95 165c-35 2-59 16-72 43 33 9 59-2 79-35" fill="#f8fafc" opacity="0.9" />
      <Bloom cx="92" cy="88" size="0.92" />
      <Bloom cx="145" cy="77" size="1.05" fill="#f8fafc" />
      <Bloom cx="179" cy="124" size="0.88" fill="#ffffff" stroke="#93c5fd" />
      <Bloom cx="121" cy="145" size="0.78" fill="#f0f9ff" />
      <circle cx="192" cy="70" r="10" fill="#fed7aa" opacity="0.8" />
      <circle cx="66" cy="139" r="8" fill="#bae6fd" opacity="0.9" />
    </motion.svg>
  )
}
