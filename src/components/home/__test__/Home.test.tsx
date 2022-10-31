import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Navigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./../../home/Home";
import BusRoute from "../../bus-route/BusRoute";

jest.mock("./../../../hooks/useBusRoutes");
jest.mock("./../../../hooks/useDirections");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));
describe("Test Home Component", () => {
  it("Has Route Details Label", () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    );
    //console.log(screen.queryByText("Route Details"));

    expect(screen.queryByText("Route Details")).toBeInTheDocument(
      "Route Details"
    );
  });
});
