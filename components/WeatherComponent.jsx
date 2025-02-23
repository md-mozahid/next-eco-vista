import { Rain } from '@/constant/image'
import { getWeatherData } from '@/lib/weather-info'
import Image from 'next/image'
import Card from './Card'

export default async function WeatherComponent({ lat, lon }) {
  const { main, description } = await getWeatherData(lat, lon)
  return (
    <Card>
      <h6 className="feature-name">Current Weather</h6>
      <div className="feature-main">
        <Image className="max-w-20" src={Rain} alt="rain icon" />
        <h3 className="feature-title">{main}</h3>
        <span className="feature-name">{description}</span>
      </div>
    </Card>
  )
}
