import { IPrimaryProps, Primary } from "../Primary";

export interface ILearnMoreProps extends IPrimaryProps {
  textContent: string;
}

export function LearnMore(props: ILearnMoreProps) {
  const { textContent, ...rest } = props;

  const onClick = () => console.log("LearnMoreButton click");

  return (
    <Primary
      data-testid="LearnMore"
      textContent={textContent}
      onClick={onClick}
      {...rest}
    />
  );
}
