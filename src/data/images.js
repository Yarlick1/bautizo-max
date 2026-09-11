const cloudName = 'daxothobr'
const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`
export function cld(publicId, transforms = 'f_auto,q_auto') {
  return `${baseUrl}/${transforms}/${publicId}`
}

const maxIds = [
  'max01',
  'max02',
  'max03',
  'max05',
  'max06',
  'max07',
  'max08',
  'max09',
  'max10',
  'max11',
  'max12',
  'max13',
  'max14',
  'max15',
  'max16',
  'max17',
  'max18',
  'max19',
  'max20',
  'max21',
  'max22',
  'max23',
  'max24',
  'max25',
  'max26',
]

export const heroPhotos = ['max25', 'max09', 'max11'].map((id) =>
  cld(`/${id}`, 'f_auto,q_auto,w_720,h_960,c_fill,g_auto,dpr_auto'),
)
export const galleryPhotos = maxIds
  .filter((id) => !['max09', 'max11', 'max25'].includes(id))
  .map((id) => cld(`/${id}`, 'f_auto,q_auto,w_520,h_700,c_fill,g_auto,dpr_auto'))

export const warmupPhotos = galleryPhotos.slice(0, 4)

export const churchPhotos = [1, 2, 3].map((index) =>
  cld(`/iglesia_${index}`, 'f_auto,q_auto,w_640,h_420,c_fill,g_auto,dpr_auto'),
)

export const receptionPhotos = [1, 2, 3].map((index) =>
  cld(`/salon_${index}`, 'f_auto,q_auto,w_640,h_420,c_fill,g_auto,dpr_auto'),
)
