import { keyframes } from "@emotion/react";
export const customAnimation = keyframes`
  triggerOnce={true}
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const left200Animation = keyframes`
  triggerOnce={true}
  from {
    opacity: 0;
    transform: translate3d(-200px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;