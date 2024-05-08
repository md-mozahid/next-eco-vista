import { WindImage } from '@/constant/image'
import { getWindData } from '@/lib/weather-info'
import Image from 'next/image'
import Card from './Card'

export default async function WindComponent({ lat, lon }) {
  const { speed, deg } = await getWindData(lat, lon)
  return (
    <Card>
      <h6 class="feature-name">Wind</h6>
      <div class="feature-main">
        <Image class="max-w-20" src={WindImage} alt="rain icon" />
        <h3 class="feature-title">{speed}</h3>
        <span class="feature-name">{deg}</span>
      </div>
    </Card>
  )
}
