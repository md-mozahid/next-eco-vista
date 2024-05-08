import { Temperature } from '@/constant/image'
import { getTemperatureData } from '@/lib/weather-info'
import Image from 'next/image'
import Card from './Card'

export default async function TemperatureComponent({ lat, lon }) {
  const { temp, feels_like } = await getTemperatureData(lat, lon)
  return (
    <Card>
      <h6 class="feature-name">Current Temperature</h6>
      <div class="feature-main">
        <Image class="max-w-20" src={Temperature} alt="rain icon" />
        <h3 class="feature-title">{temp}°C</h3>

        <span class="feature-name">{feels_like}°C</span>
      </div>
    </Card>
  )
}
