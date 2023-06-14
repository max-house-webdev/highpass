import React from "react";

export function stopPropagation<T extends (event: any) => void>(fn: T) {
  return <E extends React.SyntheticEvent<any>>(event: E) => {
    event.stopPropagation();
    fn(event);
  };
}
