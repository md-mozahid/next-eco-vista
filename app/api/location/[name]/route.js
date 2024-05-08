import { getLocationByName } from "../location-utils";

export const GET = async (request, {params}) => {
    const location = await getLocationByName(params?.name)

    return Response.json(location)
}