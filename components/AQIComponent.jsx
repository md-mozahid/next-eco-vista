import { Air } from '@/constant/image'
import { getAQIData } from '@/lib/weather-info'
import Image from 'next/image'
import Card from './Card'

export default async function AQIComponent({ lat, lon }) {
  const { main, components } = await getAQIData(lat, lon)

  const getAQIRating = (aqi) => {
    switch (aqi) {
      case 1:
        return 'Good'
      case 2:
        return 'Fair'
      case 3:
        return 'Moderate'
      case 4:
        return 'Poor'
      case 5:
        return 'Very Poor'
      default:
        return 'unknown'
    }
  }
  return (
    <Card>
      <h6 class="feature-name">Air Pollution & Quality</h6>

      <div class="mt-3 space-y-2 lg:space-y-3">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Air Quality Index
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {getAQIRating(main?.aqi)}
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Carbon Monoxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.co} µg/m³
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Nitric Oxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.no} μg/m3
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Nitrogen Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.no2} μg/m3
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Ozone
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.o3} μg/m3
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            Sulfur Dioxide
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.so2} μg/m3
          </span>
        </div>
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-2 text-sm text-[#CADEE8] lg:text-base">
            <Image class="max-w-[18px]" src={Air} alt="icon" />
            PM2.5
          </div>
          <span class="text-right text-sm text-white lg:text-base">
            {components.pm2_5} μg/m3
          </span>
        </div>
      </div>
    </Card>
  )
}
