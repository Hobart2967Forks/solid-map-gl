import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { getLength, getArea } from "./measurements";

const DrawPolygon = MapboxDraw.modes.draw_polygon;

export default {
  ...DrawPolygon,
  toDisplayFeatures: function (state, geojson, display) {
    const displayMeasure = (geojson) => {
      display(geojson);

      if (this.drawConfig.userProperties.showLength) {
        const arr = Array.isArray(geojson.geometry.coordinates[0][0])
          ? geojson.geometry.coordinates[0]
          : geojson.geometry.coordinates;
        arr.forEach((coords, index) => {
          if (!Array.isArray(coords) || index == 0) return;
          display(getLength([arr[index - 1], coords]));
        });
      }

      this.drawConfig.userProperties.showArea &&
        geojson.geometry.coordinates[0].length >= 3 &&
        display(getArea([geojson.geometry.coordinates[0]]));
    };

    DrawPolygon.toDisplayFeatures.call(this, state, geojson, displayMeasure);
  },
};
