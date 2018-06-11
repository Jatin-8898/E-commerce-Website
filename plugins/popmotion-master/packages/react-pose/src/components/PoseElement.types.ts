import { Poser, PoserProps } from 'popmotion-pose';

export type ChildRegistration = {
  element: Element;
  poserProps: PoserProps;
  onRegistered: (poser: Poser) => void;
};

export type CurrentPose = string | string[];

export type PoseContextProps = {
  registerChild?: (props: ChildRegistration) => void;
  onUnmount?: (child: Poser) => any;
  getPoseFromParent?: () => CurrentPose;
  getParentPoseProps?: () => PoserProps;
};

export type PoseElementProps = {
  children?: any;
  elementType: string;
  poseProps: PoserProps;
  pose?: CurrentPose;
  initialPose?: CurrentPose;
  withParent?: boolean;
  onChange?: { [key: string]: (v: any) => any };
  innerRef?: (el: Element) => any;
  [key: string]: any;
} & PoseContextProps;

export type PopStyle = {
  position: 'absolute';
  top: number;
  left: number;
  width: number;
  height: number;
};
