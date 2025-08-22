import { onCleanup, VoidComponent } from "solid-js";
import { useMapContext } from "../MapProvider";
import { drawEvents } from "../../events";
import type { drawEventTypes } from "../../events";
import MultiPointMode from "./modes/multi_point";
import LineStringeMode from "./modes/line_string";
import PointMode from "./modes/point";
import PolygonMode from "./modes/polygon";
import RadiusMode from "./modes/radius";
import RectangleMode from "./modes/rectangle";
import RectangleAssistedMode from "./modes/rectangle_assisted";
import styles from "./drawingStyles";
// import {
//   draw_point,
//   draw_line_string,
//   draw_polygon,
//   // draw_circle,
//   draw_radius,
//   draw_rectangle,
// } from "./modes/index";

type Props = {
  /** Draw Library */
  lib: any;
  /** Draw Options */
  options?: object;
  /** Draw Control Position */
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  /** Draw Control Instance */
  getInstance?: (object) => void;
  showLength?: boolean;
  showArea?: boolean;
} & drawEventTypes;

export const Draw: VoidComponent<Props> = (props: Props) => {
  const [ctx] = useMapContext();

  // const modes = props.lib.modes;
  // modes.point = PointMode;
  // modes.multi_point = MultiPointMode;
  // modes.line_string = LineStringeMode;
  // modes.draw_polygon = PolygonMode;
  // modes.radius = RadiusMode;
  // modes.rectangle = RectangleMode;
  // modes.rectangle_assisted = RectangleAssistedMode;

  // Add Draw Control
  const draw = new props.lib({
    styles: [...props.lib.lib.theme, ...styles],
    modes: {
      ...props.lib.modes,
      // draw_point,
      // draw_line_string,
      // draw_polygon,
      // draw_radius,
      // draw_rectangle,
    },
    userProperties: {
      showLength: props.showLength || false,
      showArea: props.showArea || false,
    },
    ...props.options,
  });
  ctx.map.addControl(draw, props.position || "top-right");
  props.getInstance && props.getInstance(draw);

  // Hook up events
  const eventList: Record<string, (evt: any) => void> = {};
  drawEvents.forEach((item) => {
    if (props[item]) {
      const event = `draw.${item.slice(2).toLowerCase()}`;
      const fn = (evt) => props[item](evt);
      eventList[event] = fn;
      ctx.map.on(event, fn);
    }
  });

  // Remove Draw Control
  onCleanup(() => {
    // Remove Events
    Object.keys(eventList).forEach((event) =>
      ctx.map.off(event, eventList[event]),
    );
    // Remove Control
    ctx.map?.removeControl(draw);
  });

  return null;
};
