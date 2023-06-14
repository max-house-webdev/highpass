import { useEffect, useRef } from "react";

export function usePrevious<T>(value: T) {
  const prevValueRef = useRef<T | null>(null);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return prevValueRef;
}
