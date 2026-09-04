import { motion } from 'framer-motion'
import { Church, Clock, ExternalLink, Loader, MapPin, PartyPopper, Shirt } from 'lucide-react'
import { ArticleImageSlider } from './ArticleImageSlider'

const details = [
  {
    title: 'Ceremonia',
    subtitle: 'Iglesia',
    time: '10:00 a.m.',
    location: 'El Castaño Capilla "Santa Maria de Guadalupe"',
    icon: Church,
    mapUrl: 'https://maps.app.goo.gl/of6ZmRwrPfAtc3oN6',
    images: ['/images/iglesia_1.jpg', '/images/iglesia_2.jpg', '/images/iglesia_3.jpg'],
  },
  {
    title: 'Recepción',
    subtitle: 'Salón',
    time: '00:00 p.m.',
    location: 'Jardín "EL PORTAL", Calle Ignacio Zaragoza 415, Bella Vista, 52172 San Salvador Tizatlalli, Méx.',
    icon: PartyPopper,
    mapUrl: 'https://maps.app.goo.gl/LXvmFuPkkkpqVxkPA',
    images: ['/images/salon_1.png', '/images/salon_2.png', '/images/salon_3.png'],
  },
]

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
        className="flex items-center min-h-80 flex-col rounded-lg border border-sky-100 bg-white/82 p-5 text-left shadow-sm backdrop-blur"
      >
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-50 text-sky-500">
          <Shirt className="h-6 w-6" strokeWidth={1.7} />
        </div>

        <h3 className=" font-script text-5xl font-semibold text-slate-700">
          Código de Vestimenta
        </h3>
        <div className="mt-5 space-y-3 text-sm leading-6 text-slate-500">
          <p className="flex items-start justify-center gap-2">
            <Loader className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
            En espera...
          </p>
        </div>
      </motion.article>
    </div>
  )
}
