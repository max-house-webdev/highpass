import { useLayoutEffect, useRef } from "react";

export function useLatest<TValue>(value: TValue) {
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
