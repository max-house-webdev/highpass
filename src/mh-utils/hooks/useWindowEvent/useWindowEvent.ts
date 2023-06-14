import { useEffect } from "react";
import { useEvent } from "../useEvent";

type TCallback = (event: WindowEventMap | Event) => void;

export function useWindowEvent(type: string, callback: TCallback) {
  const eventCallback = useEvent(callback);

  useEffect(() => {
    window.addEventListener(type, eventCallback);

    return () => window.removeEventListener(type, eventCallback);
  }, [eventCallback, type]);
}
