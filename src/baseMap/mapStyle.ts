import { type MapStyle, type BaseMapVariant } from './types';

export const mapStyle: { [key in BaseMapVariant]: MapStyle } = {
  DEFAULT: {
    styleUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    vendor: {
      name: 'OpenStreetMap',
      url: 'http://osm.org/copyright',
    },
  },
  LIGHT: {
    name: 'OSM:LightGray',
  },
  DARK: {
    name: 'OSM:DarkGray',
  },
  SATELLITE: {
    name: 'ArcGIS:Imagery',
  },
};
