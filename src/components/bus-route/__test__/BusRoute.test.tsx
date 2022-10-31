import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Layout from "./../../layout/Layout";
import Home from "./../../home/Home";
import BusRoute from "../BusRoute";
import BusStops from "./../../bus-stops/BusStops";
jest.mock("../../../hooks/useBusRoutes");
jest.mock("../../../hooks/useDirections");
jest.mock("../../../hooks/useStops");
describe("Test Bus Reoute", () => {
  it("Has Route Details Label", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/routes" />} />
            <Route path="/routes" element={<BusRoute />} />
            <Route path="/stops/:routeId/:directionId" element={<BusStops />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );
    expect(screen.queryByText("Route Details")).toBeInTheDocument(
      "Route Details"
    );

    expect(screen.findByTestId("busRouteDropdownButtonTestId")).toBeTruthy();
    fireEvent.change(screen.getByTestId("busRouteDropdownButtonTestId"), {
      target: {
        route_id: "901",
        agency_id: 0,
        route_label: "METRO Blue Line",
      },
    });

    expect(screen.findByTestId("directionDropdownButtonTestId")).toBeTruthy();
  });
});
