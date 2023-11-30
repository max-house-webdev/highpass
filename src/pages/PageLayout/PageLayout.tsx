import { content } from "@core/content";
import { SectionHeading } from "@components/simple/SectionHeading";
import { ReactNode } from "react";

export interface IPageLayoutProps {
  pageIndex: number;
  children: ReactNode;
}

export function PageLayout(props: IPageLayoutProps) {
  const { pageIndex, children, ...rest } = props;

  const { sectionNavigation } = content;

  return (
    <div id={sectionNavigation[pageIndex].id} {...rest}>
      <SectionHeading>{sectionNavigation[pageIndex].heading}</SectionHeading>
      {children}
    </div>
  );
}
