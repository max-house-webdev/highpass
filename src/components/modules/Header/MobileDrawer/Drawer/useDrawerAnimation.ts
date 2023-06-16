import { animationDuration } from "@core/constant/animation";
import { TAppearanceStatus } from "@features/hooks/useAppearanceAnimation";
import { useKeyframesAnimation } from "@mh-utils/hooks/useKeyframesAnimation";

export function useDrawerAnimation(status: TAppearanceStatus) {
  const animationCSSInterpolationIn = `
  from { opacity: 0; transform: translateX(-75%) }
  to { opacity: 1; transform: translateX(0)}
`;

  const animationCSSInterpolationOut = `
  from { opacity: 1; transform: translateX(0) }
  to { opacity: 0; transform: translateX(75%)}
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
