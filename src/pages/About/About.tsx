import { PageLayout } from "@pages/PageLayout";

export interface IAboutProps {}

export function About(props: IAboutProps) {
  const {} = props;

  return <PageLayout pageIndex={1}>children</PageLayout>;
}
