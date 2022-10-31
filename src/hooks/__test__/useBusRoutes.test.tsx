import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useBusRoutes } from "../useBusRoutes";
import { renderHook } from "@testing-library/react-hooks";

jest.mock("../useBusRoutes");

// @ts-ignore
export const wapper = ({ children }) => {
  const queryClient = new QueryClient();
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

describe("Test Use Bus Route", () => {
  it("should pull data from API", async () => {
    // const { result, waitFor } = renderHook(() => useBusRoutes(), { wapper });
    // const expected = [
    //   { route_id: "901", agency_id: 0, route_label: "METRO Blue Line" },
    //   { route_id: "902", agency_id: 0, route_label: "METRO Green Line" },
    // ];
    // await waitFor(() => result.current.isSuccess);
    // expect(result.current.data).toEqual(expected);
  });
});
