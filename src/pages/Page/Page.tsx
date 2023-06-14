import { Fonts } from "@src/components/global/Fonts";
import { MediaNavigator } from "@src/components/global/MediaNavigator";
import { ReactNode } from "react";

export interface IPageProps {
  children: ReactNode;
}

export function Page(props: IPageProps) {
  const { children } = props;

  return (
    <>
      <MediaNavigator />
      <Fonts />
      {children}
    </>
  );
}
