import { TileLayer } from "react-leaflet";
import VectorBasemapLayer from "react-esri-leaflet/plugins/VectorBasemapLayer";
import { isArcGISMap, isOpenStreetMap } from "./typeguards";
import { BaseMapVariant } from "./types";
import { mapStyle } from "./mapStyle";

interface Props {
  variant: BaseMapVariant;
}

export const BaseMap = ({ variant }: Props) => {
  const MAP_STYLE = mapStyle[variant];

  return (
    <>
      {isOpenStreetMap(MAP_STYLE) && (
        <TileLayer
          url={MAP_STYLE.styleUrl}
          attribution={`&copy; <a href="${MAP_STYLE.vendor.url}">${MAP_STYLE.vendor.name}</a>`}
        />
      )}
      {isArcGISMap(MAP_STYLE) && (
        <VectorBasemapLayer
          apiKey={import.meta.env.VITE_ARCGIS_MAP_KEY}
          name={MAP_STYLE.name}
        />
      )}
    </>
  );
};
