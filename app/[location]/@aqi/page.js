import AQIComponent from '@/components/AQIComponent'
import NoLocationInfo from '@/components/NoLocationInfo'
import { getResolvedLatLong } from '@/lib/location-info'

export default async function AQIPage({ params, searchParams }) {
  const { location } = params
  const { latitude, longitude } = searchParams
  const resolved = await getResolvedLatLong(location, latitude, longitude)

  if (resolved?.lat && resolved?.lon) {
    return <AQIComponent lat={resolved.lat} lon={resolved.lon} />
  } else {
    return <NoLocationInfo />
  }
}
