/* eslint-disable @typescript-eslint/no-explicit-any */
import { type ArcGIS, type OpenStreetMap } from './types';

export const isArcGISMap = (style: any): style is ArcGIS => {
  return style && 'name' in style;
};

export const isOpenStreetMap = (style: any): style is OpenStreetMap => {
  return style && 'styleUrl' in style && 'vendor' in style;
};

export const isEncodedArrayValid = (array: any) => {
  return Array.isArray(array) && array.length === 2 && !isNaN(array[0]) && !isNaN(array[1]);
};
