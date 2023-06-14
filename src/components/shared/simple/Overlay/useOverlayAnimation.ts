import { animationDuration } from "@core/constant/animation";
import { TOpenStatus } from "@core/types/TOpenStatus";
import { useKeyframesAnimation } from "@mh-utils/hooks/useKeyframesAnimation";

export interface IUseOverlayAnimation {
  status: TOpenStatus;
}

export function useOverlayAnimation(args: IUseOverlayAnimation) {
  const { status } = args;

  const animationCSSInterpolationIn = `
  from { opacity: 0; }
  to { opacity: 1; }
`;

  const animationCSSInterpolationOut = `
from { opacity: 1; }
to { opacity: 0;}
`;

  const animationCSSInterpolation = () => {
    switch (status) {
      case "isOpening": {
        return animationCSSInterpolationIn;
      }
      case "isClosing": {
        return animationCSSInterpolationOut;
      }
      default: {
        return "";
      }
    }
  };

  const animation = useKeyframesAnimation({
    animationCSSInterpolation: animationCSSInterpolation(),
    animationDuration,
  });

  return animation;
}
