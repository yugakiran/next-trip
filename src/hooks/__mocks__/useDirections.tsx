import { useQuery } from "@tanstack/react-query";

export function useDirections() {
  return useQuery(["useDirections"], async (): Promise<any> => {
    const data = [
      {
        direction_id: 0,
        direction_name: "Northbound",
      },
      {
        direction_id: 1,
        direction_name: "Southbound",
      },
    ];
    return data;
  });
}
