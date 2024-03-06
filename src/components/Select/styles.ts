import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  height: 40px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.inputOutline};
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;

  margin-bottom: 16px;
`;

export const Text = styled.Text<{ active: boolean }>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ active, theme }) =>
    active ? theme.colors.title : theme.colors.inputOutline};
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;

export const ModalContainer = styled.View`
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.onBackground};
`;

export const ModalTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bolt};
`;

export const OptionItem = styled.TouchableOpacity`
  width: 100%;
  min-height: 39px;
`;

export const OptionText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Input = styled.TextInput`
  height: 40px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.inputOutline};
  border-radius: 4px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 8px;

  margin: 16px 0;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
