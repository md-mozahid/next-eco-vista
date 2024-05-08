import NoLocationInfo from '@/components/NoLocationInfo';
import WeatherComponent from '@/components/WeatherComponent'
import { getResolvedLatLong } from '@/lib/location-info';

export default async function WeatherPage({ params, searchParams }) {
  const { location } = params
  const { latitude, longitude } = searchParams
  const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <WeatherComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
}
