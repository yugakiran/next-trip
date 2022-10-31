import { useEffect, useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useBusRoutes } from "./../../hooks/useBusRoutes";
import { useDirections } from "./../../hooks/useDirections";

export type BusRoute = {
  route_id: "string";
  agency_id: 0;
  route_label: "string";
};

export type Direction = {
  direction_id: 0;
  direction_name: "string";
};
export let intialBusRoute = {
  route_id: "",
  agency_id: 0,
  route_label: "Select route",
};

const BusRoute = () => {
  const navigate = useNavigate();
  const [selectedRoute, setSelectedRoute] = useState<any>(intialBusRoute);
  const [selectedDirection, setSelectedDirection] = useState<any>(null);
  const { data: busRoutes } = useBusRoutes();
  const { data: directions } = useDirections(selectedRoute.route_id);
  useEffect(() => {
    const _selRoute = window.localStorage.getItem("selectedRoute");
    const _selDirection = window.localStorage.getItem("selectedDirection");
    if (_selRoute) {
      setSelectedRoute(JSON.parse(_selRoute));
    }
    if (_selDirection) {
      setSelectedDirection(JSON.parse(_selDirection));
    }
  }, []);

  const handleRouteSelect = (eventKey: any, event: Object) => {
    const _selRoute = JSON.parse(eventKey);
    setSelectedRoute(_selRoute ?? intialBusRoute);
    window.localStorage.setItem("selectedRoute", eventKey);
    setSelectedDirection(null);
  };

  const handleDirectionSelect = (eventKey: any, event: Object) => {
    const _selDirection = JSON.parse(eventKey);
    setSelectedDirection(_selDirection ?? null);
    window.localStorage.setItem("selectedDirection", eventKey);
    navigate(`/stops/${selectedRoute.route_id}/${_selDirection.direction_id}`, {
      state: {
        routeId: selectedRoute.route_id,
        directionId: _selDirection.direction_id,
      },
      replace: false,
    });
  };

  return (
    <div className="py-4 d-flex justify-content-center">
      <div className="mb-2 row ">
        <div className="row text-center">
          <h4>Route Details</h4>
        </div>
        <div className="row text-left">
          <DropdownButton
            data-testid="busRouteDropdownButtonTestId"
            as={ButtonGroup}
            variant={""}
            onSelect={handleRouteSelect}
            id={"busRouteDropdownButtonId"}
            size="lg"
            title={selectedRoute?.route_label}
          >
            {busRoutes &&
              busRoutes.map((busRoute: any, idx: number) => {
                return (
                  <Dropdown.Item
                    eventKey={`${JSON.stringify(busRoute)}`}
                    key={idx}
                  >
                    {busRoute.route_label}
                  </Dropdown.Item>
                );
              })}
          </DropdownButton>
        </div>
        {directions && (
          <div className="row text-left">
            <DropdownButton
              data-testid="directionDropdownButtonTestId"
              as={ButtonGroup}
              variant={""}
              onSelect={handleDirectionSelect}
              id={"directionDropdownButtonId"}
              size="lg"
              title={selectedDirection?.direction_name ?? "Select direction"}
            >
              {directions.map((direction: any, idx: number) => {
                return (
                  <Dropdown.Item
                    eventKey={`${JSON.stringify(direction)}`}
                    key={idx}
                  >
                    {direction.direction_name}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusRoute;
