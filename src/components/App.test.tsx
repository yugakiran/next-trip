import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../hooks/useBusRoutes");
jest.mock("../hooks/useDirections");
jest.mock("../hooks/useStops");
test("renders learn react link", () => {
  const queryClient = new QueryClient();
  render(
    <>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </>
  );
});
