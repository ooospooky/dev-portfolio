declare module "react-awesome-reveal" {
  import { ReactNode } from "react";
  import { Keyframes } from "@emotion/react";

  export interface FadeProps {
    children?: ReactNode;
    triggerOnce?: boolean;
    delay?: number;
    duration?: number;
    fraction?: number;
    cascade?: boolean;
    damping?: number;
    direction?: "up" | "down" | "left" | "right";
    keyframes?: Keyframes;
    [key: string]: unknown;
  }

  export const Fade: React.FC<FadeProps>;
  export const Slide: React.FC<FadeProps>;
  export const Zoom: React.FC<FadeProps>;
  export const Bounce: React.FC<FadeProps>;
  export const Roll: React.FC<FadeProps>;
  export const Reveal: React.FC<FadeProps>;
}
