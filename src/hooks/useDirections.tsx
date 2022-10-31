import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useDirections(routeId: string) {
  return useQuery(
    ["useDirections", routeId],
    async () => {
      const { data } = await axios.get(
        `https://svc.metrotransit.org/nextripv2/directions/${routeId}`
      );
      return data;
    },
    { enabled: routeId?.length > 0 }
  );
}
