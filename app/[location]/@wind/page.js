import NoLocationInfo from '@/components/NoLocationInfo'
import WindComponent from '@/components/WindComponent'
import { getResolvedLatLong } from '@/lib/location-info'

export default async function WindPage({ params, searchParams }) {
  const { location } = params
  const { latitude, longitude } = searchParams
  const resolved = await getResolvedLatLong(location, latitude, longitude)

  if (resolved?.lat && resolved?.lon) {
    return <WindComponent lat={resolved.lat} lon={resolved.lon} />
  } else {
    return <NoLocationInfo />
  }
}
