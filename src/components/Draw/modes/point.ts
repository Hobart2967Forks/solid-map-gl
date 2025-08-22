import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { getCoords } from "./measurements";

const DrawPoint = MapboxDraw.modes.draw_point;

export default {
  ...DrawPoint,
  onSetup: function () {
    const draw = DrawPoint.onSetup.call(this);
    draw.point.properties = {
      ...draw.point.properties,
      type: "measure",
      anchor: "bottom",
    };

    return draw;
  },
  onMouseMove: function (state, { lngLat }) {
    state.point.properties.value = getCoords([lngLat.lng, lngLat.lat]);
    state.point.updateCoordinate("", lngLat.lng, lngLat.lat);
  },
  toDisplayFeatures: function (state, geojson, display) {
    const isActivePoint = geojson.properties.id === state.point.id;
    geojson.properties.active = isActivePoint ? "" : "false";
    console.log(geojson.properties);
    return display(geojson);
  },
};
