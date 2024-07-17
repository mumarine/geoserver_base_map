import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS.js';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new TileWMS({
        url: 'http://localhost:8080/geoserver/base_map/wms',
        params: {'LAYERS': 'base_map:base_map', 'TILED': true},
        serverType: 'geoserver',
      }),
    }),
  ],
  view: new View({
    center: [0, 0],
    zoom: 4
  })
});

