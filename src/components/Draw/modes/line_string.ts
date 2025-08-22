import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { getLength } from "./measurements";

const DrawLineString = MapboxDraw.modes.draw_line_string;

export default {
  ...DrawLineString,
  onSetup: function () {
    const draw = DrawLineString.onSetup.call(this);
    const measure = this.newFeature({
      type: "Feature",
      properties: {
        type: "measure",
        value: "TTT",
      },
      geometry: {
        type: "Point",
        coordinates: [],
      },
    });

    return { ...draw, measure };
  },
  onMouseMove: function (state, e) {
    DrawLineString.onMouseMove.call(this, state, e);

    if (state.line.coordinates.length >= 2) {
      const { label, pos } = getLength(state.line.coordinates);
      state.measure.properties.value = label;
      state.measure.updateCoordinate("", pos[1], pos[0]);
      // console.log(state.measure);
    }
  },
  toDisplayFeatures: function (state, geojson, display) {
    //   const displayMeasure = (geojson) => {
    //     display(geojson);

    //     this.drawConfig.userProperties.showLength &&
    //       geojson.geometry.coordinates.forEach((coords, index) => {
    //         if (!Array.isArray(coords) || index == 0) return;
    //         display(getLength([geojson.geometry.coordinates[index - 1], coords]));
    //       });
    //   };
    DrawLineString.toDisplayFeatures.call(this, state, geojson, display);
    console.log(state, geojson);
    display(state.measure.toGeoJSON());
  },
};
