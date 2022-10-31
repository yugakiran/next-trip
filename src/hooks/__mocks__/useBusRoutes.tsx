import { useQuery } from "@tanstack/react-query";

export function useBusRoutes() {
  return useQuery(["useBusRoutes"], async (): Promise<any> => {
    const data = [
      {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
      {
        route_id: "902",
        agency_id: 0,
        route_label: "METRO Green Line",
      },
    ];
    return data;
  });
}
