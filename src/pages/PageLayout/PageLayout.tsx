import { content } from "@core/content";
import { SectionHeading } from "@components/simple/SectionHeading";
import { ReactNode } from "react";

export interface IPageLayoutProps {
  pageIndex: number;
  children: ReactNode;
}

export function PageLayout(props: IPageLayoutProps) {
  const { pageIndex, children, ...rest } = props;

  const { sections } = content;

  return (
    <div id={sections[pageIndex].id} {...rest}>
      <SectionHeading>{sections[pageIndex].heading}</SectionHeading>
      {children}
    </div>
  );
}
