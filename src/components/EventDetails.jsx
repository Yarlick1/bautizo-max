import { motion } from 'framer-motion'
import { Church, Clock, ExternalLink, Gift, MapPin, PartyPopper, Shirt } from 'lucide-react'
import { ArticleImageSlider } from './ArticleImageSlider'

const details = [
  {
    title: 'Ceremonia',
    subtitle: 'Iglesia',
    time: '10:00 a.m.',
    location: 'El Castaño Capilla "Santa Maria de Guadalupe"',
    icon: Church,
    mapUrl: 'https://maps.app.goo.gl/of6ZmRwrPfAtc3oN6',
    images: ['/images/iglesia_1.webp', '/images/iglesia_2.webp', '/images/iglesia_3.webp'],
  },
  {
    title: 'Recepción',
    subtitle: 'Salón',
    time: '02:00 p.m.',
    location: 'Jardín "EL PORTAL", Calle Ignacio Zaragoza 415, Bella Vista, 52172 San Salvador Tizatlalli, Méx.',
    icon: PartyPopper,
    mapUrl: 'https://maps.app.goo.gl/LXvmFuPkkkpqVxkPA',
    images: ['/images/salon_1.webp', '/images/salon_2.webp', '/images/salon_3.webp'],
  },
]

const dressCodeInspirationUrl = 'https://pin.it/44Ra7MP5d'
const giftRegistryUrl = 'https://www.amazon.com.mx/baby-reg/maximiliano-hernandezperez-septiembre-2026-toluca/37XIM4SG35CCO?ref_=cm_sw_r_cp_ud_dp_SHEJZ86QWVE5PMKKQFNN_1'

const dressCodeColors = [
  { name: 'Beige', value: '#eadbd0' },
  { name: 'Azul pastel', value: '#c4ddf0' },
  { name: 'Lavanda', value: '#d8c8ee' },
  { name: 'Rosa suave', value: '#f7dddd' },
  { name: 'Nude', value: '#dfc4aa' },
  { name: 'Durazno', value: '#f8d8c0' },
  { name: 'Menta', value: '#c9e9e2' },
  { name: 'Vainilla', value: '#f8ebc8' },
]

function DressCodePalette() {
  return (
    <div className="mt-5 w-full text-center">
      <p className="font-serif text-base leading-7 text-[#a43670]">
        Beige, Nude & Colores Pasteles
      </p>

      <div className="mx-auto mt-5 grid max-w-56 grid-cols-4 gap-x-3 gap-y-4">
        {dressCodeColors.map((color) => (
          <span
            key={color.name}
            aria-label={color.name}
            title={color.name}
            className="block aspect-square rounded-full shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75),0_8px_18px_rgba(148,163,184,0.16)]"
            style={{ backgroundColor: color.value }}
          />
        ))}
      </div>
    </div>
  )
}

export function EventDetails() {
  return (
    <div className="mx-auto mt-10 grid w-full max-w-3xl gap-4 md:grid-cols-3">
      {details.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="flex items-center min-h-80 flex-col rounded-lg border border-sky-100 bg-white/82 p-5 text-left shadow-sm backdrop-blur"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
              <Icon className="h-6 w-6" strokeWidth={1.7} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
              {item.subtitle}
            </p>
            <h3 className=" font-script text-5xl font-semibold text-slate-700">
              {item.title}
            </h3>
            <div className="mt-5 space-y-3 text-sm leading-6 text-slate-500">
              <p className="flex items-start justify-center gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                {item.time}
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                {item.location}
              </p>
            </div>

            <ArticleImageSlider images={item.images} alt={`Imágenes de ${item.subtitle}`} />

            {item.mapUrl && (
              <a
                href={item.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-600 transition-colors w-full hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
              >
                Ver mapa
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </motion.article>
        )
      })}

      <motion.article
        key="vestimenta"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="flex items-center min-h-80 flex-col rounded-lg border border-sky-100 bg-white/82 p-5 text-center shadow-sm backdrop-blur"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
          <Shirt className="h-6 w-6" strokeWidth={1.7} />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4f7f42]">
          Código de
        </p>
        <h3 className="font-script text-5xl font-semibold leading-none text-slate-700">
          Vestimenta
        </h3>

        <DressCodePalette />

        <a
          href={dressCodeInspirationUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
        >
          Ver inspiración de vestimenta
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.article>

      <motion.article
        key="mesa-regalos"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="flex items-center min-h-72 flex-col rounded-lg border border-sky-100 bg-white/82 p-5 text-center shadow-sm backdrop-blur md:col-start-3"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
          <Gift className="h-6 w-6" strokeWidth={1.7} />
        </div>

        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-500">
          Mesa de regalos
        </p>
        <h3 className="mt-2 font-script text-5xl font-semibold leading-none text-slate-700">
          Para Max
        </h3>
        <p className="mt-5 font-serif text-sm leading-7 text-slate-500">
          Si deseas tener un detalle, puedes encontrar algunas ideas preparadas con mucho cariño.
        </p>

        <a
          href={giftRegistryUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-600 transition-colors hover:bg-sky-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-100"
        >
          Ver mesa de regalos
          <ExternalLink className="h-4 w-4" />
        </a>
      </motion.article>
    </div>
  )
}
