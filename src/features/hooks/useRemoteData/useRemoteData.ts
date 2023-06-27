import { useIsMounted } from "@src/mh-utils/hooks/useIsMounted";
import { useEffect } from "react";

export function useRemoteData(getData: () => void) {
  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted) {
      getData();
    }
  }, [getData, isMounted]);
}
