import { ReactNode } from "react";
import { Text, Touchable } from "./styles";
import { ActivityIndicator } from "react-native";
import { theme } from "Global/theme";

type Props = {
  children: ReactNode;
  disabled: boolean;
  onPress: () => void;
  isLoading: boolean;
};

export function Button({ children, disabled, onPress, isLoading }: Props) {
  return (
    <Touchable disabled={disabled} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size={14} color={theme.colors.onBackground} />
      ) : (
        <Text disabled={disabled}>{children}</Text>
      )}
    </Touchable>
  );
}
