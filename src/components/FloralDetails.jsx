import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FoliageCluster({ className = '', flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 330"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path d="M112 304C95 232 103 160 151 84" fill="none" stroke="#93c5fd" strokeWidth="4" strokeLinecap="round" opacity="0.45" />
      <path d="M100 226C66 196 39 190 14 204c24 38 60 46 97 24" fill="#bfdbfe" opacity="0.62" />
      <path d="M123 178c43-22 67-49 70-83-47 2-77 27-84 78" fill="#e0f2fe" opacity="0.84" />
      <path d="M119 261c36-24 63-26 91-8-22 33-51 41-91 20" fill="#cbd5e1" opacity="0.56" />
      <path d="M68 150c-26-29-28-56-7-82 28 18 38 46 17 86" fill="#dbeafe" opacity="0.78" />
      <g fill="#f8fafc" stroke="#7dd3fc" strokeWidth="3" opacity="0.92">
        <path d="M146 55 156 83 186 94 156 105 146 134 136 105 106 94 136 83z" />
        <path d="M73 175 82 197 106 205 82 214 73 237 64 214 40 205 64 197z" />
      </g>
      <circle cx="146" cy="94" r="9" fill="#64748b" opacity="0.68" />
      <circle cx="73" cy="205" r="7" fill="#64748b" opacity="0.58" />
    </svg>
  )
}

function PaperPlane({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 140 96" className={className}>
      <path d="M10 45 126 12 80 84 60 52 10 45z" fill="#eff6ff" stroke="#60a5fa" strokeWidth="6" strokeLinejoin="round" />
      <path d="M60 52 126 12" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" />
      <path d="M80 84 56 64" stroke="#93c5fd" strokeWidth="5" strokeLinecap="round" />
      <path d="M18 76c22 13 42 13 60 0" fill="none" stroke="#bfdbfe" strokeWidth="4" strokeDasharray="8 9" strokeLinecap="round" opacity="0.8" />
    </svg>
  )
}

export function FloralDetails() {
  const containerRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to('.floral-piece', {
        y: 12,
        rotate: 1.6,
        duration: 5.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.45,
      })

      gsap.to('.paper-plane', {
        x: 16,
        y: -10,
        rotate: -4,
        duration: 6.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.8,
      })
    }, containerRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <FoliageCluster className="floral-piece absolute -left-14 top-40 h-72 w-52 opacity-70 sm:left-2 sm:h-80" />
      <FoliageCluster className="floral-piece absolute -right-16 top-[46rem] h-72 w-52 opacity-45 sm:right-0 sm:h-80" flip />
      <PaperPlane className="paper-plane absolute right-8 top-64 h-16 w-24 opacity-50 sm:right-24 sm:top-72" />
      <PaperPlane className="paper-plane absolute left-8 bottom-36 h-14 w-20 -rotate-12 opacity-40 sm:left-24" />
    </div>
  )
}
