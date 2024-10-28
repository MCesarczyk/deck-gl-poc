import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";
import { Lineaments } from "./Lineaments";

function App() {
  return (
    <MapContainer center={[51.4, -55.79]} zoom={12} id="map">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Lineaments />
    </MapContainer>
  );
}

export default App;
