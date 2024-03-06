import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.onBackground};
  margin-bottom: 16px;
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bolt};
  margin-bottom: 16px;
  font-size: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
`;
