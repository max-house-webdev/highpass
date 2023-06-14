import { useAppMediaQuery } from "@src/features/hooks/useAppMediaQuery";
import { useWindowEvent } from "@src/mh-utils/hooks/useWindowEvent/useWindowEvent";

import { useNavigate } from "react-router-dom";

export function MediaNavigator() {
  const device = useAppMediaQuery();
  const navigate = useNavigate();

  useWindowEvent("resize", () => {
    if (!device) {
      navigate("/not-supported-device");
    } else {
      navigate("/");
    }
  });

  return null;
}
