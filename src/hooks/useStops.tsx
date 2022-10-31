import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useStops(routeId: string, directionId: number) {
  return useQuery(
    ["useStops", routeId, directionId],
    async () => {
      const { data } = await axios.get(
        `https://svc.metrotransit.org/nextripv2/stops/${routeId}/${directionId}`
      );
      return data;
    },
    { enabled: routeId?.length > 0 && !isNaN(directionId) }
  );
}
