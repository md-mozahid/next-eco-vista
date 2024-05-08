import { getLocations } from './location-utils'

export const GET = async () => {
  const locations = await getLocations()

  return Response.json(locations)
}
