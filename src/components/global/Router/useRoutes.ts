import { useAppMediaQuery } from "@hooks/useAppMediaQuery";
import { useEffect, useLayoutEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";

export function useRoutes() {
  const device = useAppMediaQuery();

  console.log(device);

  useEffect(() => {
    switch (device) {
      case "mobile":
        redirect("/m/");
        break;
      case "tablet":
      case "tabletWide":
      case "desktop":
        redirect("/");
        break;
    }
  }, [device]);

  // useLayoutEffect(() => {
  //   switch (device) {
  //     case "mobile":
  //       navigate("/m");
  //       break;
  //     case "tablet":
  //     case "tabletWide":
  //     case "desktop":
  //       navigate("/");
  //       break;
  //   }
  // }, [device]);

  return null;
}
