import { useEffect, useRef } from "react";

export function usePrevious<TValue>(value: TValue) {
  /**
   * Hook returns reference to the previous value
   * updated with useEffect
   * @param: value<TValue>
   * @return: React.MutableRefObject<TValue>
   */
  const prevValueRef = useRef<TValue | null>(null);

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return prevValueRef;
}
