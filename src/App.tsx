import { MapContainer, Pane } from "react-leaflet";

import { Lineaments } from "./Lineaments";
import "./App.css";
import { BaseMap } from "./baseMap/BaseMap";

function App() {
  return (
    <MapContainer center={[51.4, -55.79]} zoom={12} id="map">
      <BaseMap variant="DARK" />
      <Pane name="lineaments" style={{ zIndex: 1000 }}>
        <Lineaments />
      </Pane>
    </MapContainer>
  );
}

export default App;
