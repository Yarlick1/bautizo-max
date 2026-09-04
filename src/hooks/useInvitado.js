import { useMemo } from 'react'
import { invitados } from '../data/invitados'

const invitadoGenerico = {
  familia: 'Invitado especial',
  boletos: null,
  invitacion: null,
  isGeneric: true,
}

function normalizeSlug(value = '') {
  return value.trim().toLowerCase().replace(/^\/+|\/+$/g, '')
}

export function useInvitado() {
  return useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const querySlug = searchParams.get('invitado')
    const pathSlug = window.location.pathname.split('/').filter(Boolean).at(0)
    const slug = normalizeSlug(querySlug || pathSlug || '')

    if (!slug) return invitadoGenerico

    return invitados.find((item) => item.invitacion === slug) || invitadoGenerico
  }, [])
}
