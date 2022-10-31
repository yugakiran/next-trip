import { useQuery } from "@tanstack/react-query";

export function useStops() {
  return useQuery(["useStops"], async (): Promise<any> => {
    const data = [
      {
        place_code: "MAAM",
        description: "Mall of America Station",
      },
      {
        place_code: "30AV",
        description: "30th Ave Station",
      },
      {
        place_code: "BLCT",
        description: "Bloomington Central Station",
      },
    ];
    return data;
  });
}
