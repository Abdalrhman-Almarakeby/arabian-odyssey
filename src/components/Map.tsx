import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

type MapProps = {
  cords: LatLngExpression;
  location: string;
};

export function Map({ cords, location }: MapProps) {
  return (
    <MapContainer center={cords} zoom={13} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; arabian-odyssey"
      />
      <Marker position={cords}>
        <Popup>
          <p className="font-bold">{location}</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
