import { Page } from "@src/components/templates/Page";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  const {} = props;

  return <Page pageIndex={1}>children</Page>;
}
