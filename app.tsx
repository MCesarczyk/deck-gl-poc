/* eslint-disable */
import * as L from 'leaflet';
import {LeafletLayer} from 'deck.gl-leaflet';
import {MapView} from '@deck.gl/core';
import {GeoJsonLayer} from '@deck.gl/layers';

const LINEAMENTS = 'https://researchmlstorage.blob.core.windows.net/frontend-mocks/test/test44raw.geojson';

const map = L.map(document.getElementById('map'), {
  center: [51.40, -55.79],
  zoom: 12
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const deckLayer = new LeafletLayer({
  // @ts-expect-error
  views: [
    new MapView({
      repeat: true
    })
  ],
  layers: [
    new GeoJsonLayer({
      id: 'lineaments',
      data: LINEAMENTS,
      extruded: true,
      filled: true,
      getElevation: 30,
      pointRadiusMinPixels: 2,
      getLineWidth: 20,
      getPointRadius: 4,
      pointRadiusScale: 2000,
      getFillColor: [160, 160, 180, 200],
      pointRadiusUnits: 'pixels',
      pointType: 'circle+text',
      stroked: false,
      pickable: true,
    }),
  ]
});
map.addLayer(deckLayer);

const featureGroup = L.featureGroup();
map.addLayer(featureGroup);
