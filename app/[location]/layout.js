import { Background } from '@/constant/image'
import Image from 'next/image'
import '../../app/globals.css'

export const metadata = {
  title: 'EcoVista',
  description: 'Generated by create next app',
}

export default function LocationLayout({
  children,
  weather,
  aqi,
  wind,
  temperature,
}) {
  return (
    <div className="wrapper">
      <Image src={Background} alt="background image" className="bg-img" />
      <div className="overlay"></div>
      <main className="!z-50 w-full">
        <div className="container">
          <div class="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  )
}
