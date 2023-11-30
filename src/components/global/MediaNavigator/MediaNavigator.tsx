import { TDevice } from "@hooks/useAppMediaQuery";
import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export interface IMediaNavigatorProps {
  device: TDevice;
}

export function MediaNavigator(props: IMediaNavigatorProps) {
  const { device } = props;

  console.log(device);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const splitPathname = pathname.split("/");
  const page = splitPathname[splitPathname.length - 1];

  useLayoutEffect(() => {
    switch (device) {
      case "mobile":
        navigate(`/m/${page}`);
        break;
      case "tablet":
      case "tabletWide":
      case "desktop":
        navigate(`/${page}`);
        break;
    }
  }, [device, navigate, page]);

  return null;
}
