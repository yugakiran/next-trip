import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./home/Home";
import BusRoute from "./bus-route/BusRoute";
import NoPage from "./NoPage";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import BusStops from "./bus-stops/BusStops";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="routes" element={<BusRoute />} />
              <Route
                path="stops/:routeId/:directionId"
                element={<BusStops />}
              />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
