import { ReactNode } from "react";
import { ChipText, Touchable } from "./styles";

export type SelectedProps = {
  selected: boolean;
};

export type Props = {
  children: string;
  onPress: () => void;
} & SelectedProps;

export function Chip({ selected, children, onPress }: Props) {
  return (
    <Touchable selected={selected} onPress={onPress}>
      <ChipText selected={selected}>{children}</ChipText>
    </Touchable>
  );
}
