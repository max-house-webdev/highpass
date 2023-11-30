import * as globalBreakpoints from "../constant/breakpoints";
import { addPixels } from "@mh-utils/addUnitsToNumbers";

const constBreakpoints = globalBreakpoints.breakpoints;

export const breakpoints = {
  sm: addPixels(constBreakpoints.sm),
  lg: addPixels(constBreakpoints.lg),
  "2xl": addPixels(constBreakpoints.xxl),
};
