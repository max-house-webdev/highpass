import { useLayoutEffect, useRef } from "react";

export function useLatest<TValue>(value: TValue) {
  /**
   * Hook returns reference to the latest value
   * updated with useLayoutEffect
   * @param: value<TValue>
   * @return: React.MutableRefObject<TValue>
   */
  const valueRef = useRef(value);

  useLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
