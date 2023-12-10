import { Page } from "@components/layouts/Page";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  const {} = props;

  return <Page pageIndex={1}>children</Page>;
}
