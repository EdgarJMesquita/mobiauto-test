import { ReactNode } from "react";
import { ChipText, ChipContainer } from "./styles";
import { TouchableOpacity } from "react-native";

export type SelectedProps = {
  selected: boolean;
};

export type Props = {
  children: string;
  onPress: () => void;
} & SelectedProps;

export function Chip({ selected, children, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <ChipContainer selected={selected}>
        <ChipText selected={selected}>{children}</ChipText>
      </ChipContainer>
    </TouchableOpacity>
  );
}
