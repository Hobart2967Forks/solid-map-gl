export default [
  // point active
  // {
  //   id: "points-active-halo",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "$type", "Point"],
  //     ["==", "meta", "feature"],
  //     ["==", "active", "true"],
  //   ],
  //   paint: {
  //     "circle-radius": 9,
  //     "circle-color": "#f7ad3b",
  //     "circle-opacity": 0.75,
  //   },
  // },
  // {
  //   id: "highlight-active-points",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "$type", "Point"],
  //     ["==", "meta", "feature"],
  //     ["==", "active", "true"],
  //   ],
  //   paint: {
  //     "circle-radius": 5,
  //     "circle-color": ["get", "user_color"],
  //   },
  // },
  // // point inactive
  // {
  //   id: "points-inactive-halo",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "$type", "Point"],
  //     ["==", "meta", "feature"],
  //     ["==", "active", "false"],
  //     ["!has", "user_label"],
  //   ],
  //   paint: {
  //     "circle-radius": 8,
  //     "circle-color": "#FFFFFF",
  //     "circle-opacity": 0.75,
  //   },
  // },
  // {
  //   id: "points-inactive",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "$type", "Point"],
  //     ["==", "meta", "feature"],
  //     ["==", "active", "false"],
  //     ["!has", "user_label"],
  //   ],
  //   paint: {
  //     "circle-radius": 5,
  //     "circle-color": ["get", "user_color"],
  //   },
  // },
  // {
  //   id: "points-inactive-label",
  //   type: "symbol",
  //   filter: [
  //     "all",
  //     ["==", "$type", "Point"],
  //     ["==", "meta", "feature"],
  //     ["==", "active", "false"],
  //     ["has", "user_label"],
  //   ],
  //   layout: {
  //     "text-field": ["get", "user_label"],
  //     "text-font": ["Arial Regular"],
  //     "text-anchor": "bottom",
  //     "text-size": 20,
  //   },
  //   paint: {
  //     "text-halo-color": "rgba(255,255,255,0.75)",
  //     "text-halo-width": 2,
  //     "text-halo-blur": 1,
  //     "text-color": ["get", "user_color"],
  //   },
  // },

  // // line avtive (being drawn)
  // {
  //   id: "gl-draw-line-active",
  //   type: "line",
  //   filter: ["all", ["==", "$type", "LineString"], ["==", "active", "true"]],
  //   layout: {
  //     "line-cap": "round",
  //     "line-join": "round",
  //   },
  //   paint: {
  //     "line-color": "#f7ad3b",
  //     "line-dasharray": [0.2, 2],
  //     "line-width": 3,
  //   },
  // },
  // {
  //   id: "gl-draw-line-inactive",
  //   type: "line",
  //   filter: ["all", ["==", "$type", "LineString"], ["==", "active", "false"]],
  //   layout: {
  //     "line-cap": "round",
  //     "line-join": "round",
  //   },
  //   paint: {
  //     "line-color": [
  //       "case",
  //       ["has", "user_color"],
  //       ["get", "user_color"],
  //       "#f7ad3b",
  //     ],
  //     "line-width": 2,
  //   },
  // },
  // // vertex point halos
  // {
  //   id: "gl-draw-polygon-and-line-vertex-halo-active",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "meta", "vertex"],
  //     ["==", "$type", "Point"],
  //     ["!=", "mode", "static"],
  //   ],
  //   paint: {
  //     "circle-radius": 5,
  //     "circle-color": "#FFF",
  //     "circle-opacity": 0.75,
  //   },
  // },
  // // vertex points
  // {
  //   id: "gl-draw-polygon-and-line-vertex-active",
  //   type: "circle",
  //   filter: [
  //     "all",
  //     ["==", "meta", "vertex"],
  //     ["==", "$type", "Point"],
  //     ["!=", "mode", "static"],
  //   ],
  //   paint: {
  //     "circle-radius": 3,
  //     "circle-color": "#f7ad3b",
  //   },
  // },
  // // polygon fill
  // {
  //   id: "gl-draw-polygon-fill-inactive",
  //   type: "fill",
  //   filter: ["==", "$type", "Polygon"],
  //   paint: {
  //     "fill-color": [
  //       "case",
  //       ["has", "user_color"],
  //       ["get", "user_color"],
  //       "#f7ad3b",
  //     ],
  //     "fill-opacity": 0.1,
  //   },
  // },
  // // polygon outline stroke
  // // This doesn't style the first edge of the polygon, which uses the line stroke styling instead
  // {
  //   id: "gl-draw-polygon-stroke-active",
  //   type: "line",
  //   filter: ["all", ["==", "$type", "Polygon"], ["==", "active", "true"]],
  //   layout: {
  //     "line-cap": "round",
  //     "line-join": "round",
  //   },
  //   paint: {
  //     "line-color": "#f7ad3b",
  //     "line-dasharray": [0.5, 2],
  //     "line-width": 2,
  //   },
  // },
  // {
  //   id: "gl-draw-polygon-stroke-inactive",
  //   type: "line",
  //   filter: ["all", ["==", "$type", "Polygon"], ["==", "active", "false"]],
  //   layout: {
  //     "line-cap": "round",
  //     "line-join": "round",
  //   },
  //   paint: {
  //     "line-color": [
  //       "case",
  //       ["has", "user_color"],
  //       ["get", "user_color"],
  //       "#f7ad3b",
  //     ],
  //     "line-width": 2,
  //   },
  // },
  {
    id: "measure-label",
    type: "symbol",
    filter: ["all", ["==", "$type", "Point"], ["==", "user_type", "measure"]],
    layout: {
      "text-field": ["get", "user_value"],
      "text-anchor": ["get", "user_anchor"],
      "text-offset": [
        "match",
        ["get", "user_anchor"],
        "bottom",
        [0, -0.5],
        [0, 0],
      ],
      "text-size": 12,
      "text-allow-overlap": true,
      "text-ignore-placement": true,
    },
    paint: {
      "text-halo-color": "rgba(255,255,255,0.75)",
      "text-halo-width": 2,
      "text-halo-blur": 1,
      "text-color": "#000",
    },
  },
];
