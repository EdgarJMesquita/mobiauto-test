import { ReactNode } from "react";
import { Container } from "./styles";

type Props = {
  children: ReactNode;
  showPadding?: boolean;
};

export function Background({ children, showPadding = true }: Props) {
  return <Container showPadding={showPadding}>{children}</Container>;
}
