import { PoserProps, PoseMap, Pose, DragProps } from '../types';

export type PoseSelector = (props: PoserProps) => PoseMap;
export type PoseValuesSelector = (props: Pose) => Pose;
export type DragPropsSelector = (props: PoserProps) => DragProps;

export const getPoses: PoseSelector = ({
  draggable,
  initialPose,
  passive,
  onChange,
  dragBounds,
  onDragStart,
  onDragEnd,
  parentValues,
  values,
  ...poses
}) => poses;

export const getPoseValues: PoseValuesSelector = ({
  transition,
  delay,
  delayChildren,
  staggerChildren,
  staggerDirection,
  ...props
}) => props;

export const getDragProps: DragPropsSelector = ({
  dragBounds,
  onDragStart,
  onDragEnd
}) => ({ dragBounds, onDragEnd, onDragStart });
