import { useLayoutEffect, useRef } from "react";

export function useLatest<TValue>(value: TValue) {
  /**
   * Hook returns reference to the latest value
   */
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
