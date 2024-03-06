import styled from "styled-components/native";

type Props = {
  disabled: boolean;
};

export const Touchable = styled.TouchableOpacity<Props>`
  border-radius: 4px;
  width: 100%;
  min-height: 32px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabledBackgroundButton : theme.colors.primary};
`;

export const Text = styled.Text<Props>`
  font-size: 14px;

  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledTextButton : theme.colors.onBackground};
`;
