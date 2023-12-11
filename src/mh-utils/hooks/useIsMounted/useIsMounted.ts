import { useEffect, useState } from "react";

export function useIsMounted() {
  /**
   * Hook checks is component is mounted
   * @return: isMounted<boolean>
   */
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
}
