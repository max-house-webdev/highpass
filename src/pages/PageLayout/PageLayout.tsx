import { content } from "@core/content";
import { SectionHeading } from "@components/simple/SectionHeading";
import { ReactNode } from "react";
import { Container as ChakraContainer, ContainerProps } from "@chakra-ui/react";

export interface IPageLayoutProps extends ContainerProps {
  pageIndex: number;
  children: ReactNode;
}

export function PageLayout(props: IPageLayoutProps) {
  const { pageIndex, children, ...rest } = props;

  const { sectionNavigation } = content;

  return (
    <ChakraContainer
      as={"section"}
      id={sectionNavigation[pageIndex].id}
      paddingBlockStart={4}
      {...rest}
    >
      <SectionHeading>{sectionNavigation[pageIndex].heading}</SectionHeading>
      {children}
    </ChakraContainer>
  );
}
