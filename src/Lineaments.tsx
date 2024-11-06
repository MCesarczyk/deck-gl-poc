// import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { LeafletLayer } from "deck.gl-leaflet";
import { MapView } from "@deck.gl/core";
import { GeoJsonLayer } from "@deck.gl/layers";

const LINEAMENTS =
  "https://researchmlstorage.blob.core.windows.net/frontend-mocks/test/test44raw.geojson";

export const Lineaments = () => {
  const map = useMap();

  const deckLayer = new LeafletLayer({
    // @ts-expect-error
    views: [
      new MapView({
        repeat: true,
      }),
    ],
    layers: [
      new GeoJsonLayer({
        id: "lineaments",
        data: LINEAMENTS,
        extruded: true,
        filled: true,
        getElevation: 30,
        pointRadiusMinPixels: 2,
        getLineWidth: 20,
        getPointRadius: 4,
        pointRadiusScale: 2000,
        getFillColor: [160, 160, 180, 200],
        getLineColor: [255, 255, 255],
        pointRadiusUnits: "pixels",
        pointType: "circle+text",
        stroked: false,
        pickable: true,
      }),
    ],
  });
  map.addLayer(deckLayer);

  return null;
};
