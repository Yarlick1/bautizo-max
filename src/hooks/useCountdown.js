import { useEffect, useMemo, useState } from 'react'

function getTimeLeft(targetDate) {
  const difference = targetDate.getTime() - Date.now()

  if (difference <= 0) {
    return { dias: 0, horas: 0, minutos: 0, segundos: 0, terminado: true }
  }

  return {
    dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
    horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((difference / (1000 * 60)) % 60),
    segundos: Math.floor((difference / 1000) % 60),
    terminado: false,
  }
}

export function useCountdown(targetDate) {
  const date = useMemo(() => new Date(targetDate), [targetDate])
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(date))

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft(date))
    }, 1000)

    return () => window.clearInterval(intervalId)
  }, [date])

  return timeLeft
}
