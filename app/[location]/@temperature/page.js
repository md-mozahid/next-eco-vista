import NoLocationInfo from "@/components/NoLocationInfo";
import TemperatureComponent from "@/components/TemperatureComponent"
import { getResolvedLatLong } from "@/lib/location-info";

export default async function TemperaturePage({ params, searchParams }) {
  const { location } = params
  const { latitude, longitude } = searchParams
   const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <TemperatureComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
}
