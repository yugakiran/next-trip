import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import * as React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import BusRoute from "../../bus-route/BusRoute";
import Home from "../../home/Home";
import BusStops from "./../BusStops";

jest.mock("./../../../hooks/useStops");
jest.mock("./../../../hooks/useBusRoutes");
jest.mock("./../../../hooks/useDirections");

jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useHistory: jest.fn(),
  useRouteMatch: jest.fn(),
}));

describe("Test Bus stops", () => {
  it("Table Rendred", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/stops/901/0" />} />
            <Route path="/stops/:routeId/:directionId" element={<BusStops />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );

    expect(screen.findByTestId("busStopsTableTestId")).toBeTruthy();
  });
});
