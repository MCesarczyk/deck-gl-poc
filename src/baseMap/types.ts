export type BaseMapVariant = 'DEFAULT' | 'DARK' | 'LIGHT' | 'SATELLITE';

export interface ArcGIS {
  name: string;
}

export interface OpenStreetMap {
  styleUrl: string;
  vendor: {
    name: string;
    url: string;
  };
}

export type MapStyle = OpenStreetMap | ArcGIS;
