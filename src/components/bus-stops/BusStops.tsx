import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useStops } from "./../../hooks/useStops";

interface BusStopsProps {}

const BusStops: React.FC<BusStopsProps> = () => {
  const { routeId, directionId } = useParams();
  const { data: stops } = useStops(routeId + "", Number(directionId));
  const { state } = useLocation();
  return (
    <>
      {stops && (
        <>
          <Table data-testid="busStopsTableTestId" responsive="md">
            <thead>
              <tr>
                <th>Route</th>
                <th>Direction</th>
                <th>Stop</th>
              </tr>
            </thead>
            <tbody>
              {stops.map((stop: any, idx: number) => {
                return (
                  <tr key={`${stop.description}-${idx}`}>
                    <td>{routeId}</td>
                    <td>{directionId}</td>
                    <td>{stop.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
};

export default BusStops;
