import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useBusRoutes() {
  return useQuery(["busRoutes"], async () => {
    const { data } = await axios.get(
      "https://svc.metrotransit.org/nextripv2/routes"
    );
    return data;
  });
}
