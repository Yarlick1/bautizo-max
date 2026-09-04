import { useEffect, useRef } from 'react'
import gsap from 'gsap'

function FlowerCluster({ className = '', flip = false }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 320"
      className={className}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      {/* <path
        d="M112 305C88 232 93 156 151 82"
        fill="none"
        stroke="#7dd3fc"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.55"
      /> */}
      <path
        d="M103 222C70 196 42 190 18 204c25 35 56 42 93 24"
        fill="#bfdbfe"
        opacity="0.58"
      />
      <path
        d="M125 178c44-18 68-44 72-78-47-2-77 22-84 72"
        fill="#e0f2fe"
        opacity="0.9"
      />
      <g fill="#f8fafc" stroke="#7dd3fc" strokeWidth="3" opacity="0.94">
        <circle cx="145" cy="73" r="17" />
        <circle cx="166" cy="89" r="17" />
        <circle cx="160" cy="115" r="17" />
        <circle cx="133" cy="112" r="17" />
        <circle cx="125" cy="88" r="17" />
      </g>
      <circle cx="146" cy="94" r="13" fill="#fde68a" opacity="0.78" />
      <g fill="#ffffff" stroke="#bae6fd" strokeWidth="3" opacity="0.88">
        <circle cx="72" cy="193" r="14" />
        <circle cx="90" cy="207" r="14" />
        <circle cx="83" cy="229" r="14" />
        <circle cx="59" cy="224" r="14" />
        <circle cx="55" cy="202" r="14" />
      </g>
      <circle cx="72" cy="210" r="10" fill="#fed7aa" opacity="0.74" />
      <path
        d="M116 263c34-23 57-25 84-7-20 31-47 39-85 19"
        fill="#dbeafe"
        opacity="0.7"
      />
    </svg>
  )
}

export function FloralDetails() {
  const containerRef = useRef(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.to('.floral-piece', {
        y: 14,
        rotate: 2,
        duration: 5.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.4,
      })
    }, containerRef)

    return () => context.revert()
  }, [])

  return (
    <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <FlowerCluster className="floral-piece absolute -left-14 top-40 h-72 w-52 opacity-70 sm:left-2 sm:h-80" />
      {/* <FlowerCluster className="floral-piece absolute -right-14 top-[42rem] h-72 w-52 opacity-65 sm:right-3 sm:h-80" flip /> */}
      {/* <FlowerCluster className="floral-piece absolute -left-16 bottom-28 h-64 w-48 opacity-55 sm:left-4" /> */}
    </div>
  )
}
