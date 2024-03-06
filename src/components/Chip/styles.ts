import styled from "styled-components/native";
import { SelectedProps } from ".";

export const Touchable = styled.TouchableOpacity<SelectedProps>`
  border-radius: 16px;
  padding: 3px 12px;

  background-color: ${({ theme, selected }) =>
    selected
      ? theme.colors.selectedBackgroundChip
      : theme.colors.defaultBackgroundChip};

  border-color: ${({ theme }) => theme.colors.selectedBackgroundChip};
  border-width: 1px;
`;

export const ChipText = styled.Text<SelectedProps>`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, selected }) =>
    selected ? theme.colors.selectedTextChip : theme.colors.defaultTextChip};
`;
