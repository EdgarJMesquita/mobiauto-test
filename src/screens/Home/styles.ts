import styled from "styled-components/native";

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bolt};
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  text-align: center;
  margin-top: 16px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: 14px;
  text-align: center;
  margin-top: 8px;
  padding: 0 16px;
`;

export const Card = styled.View`
  background-color: ${({ theme }) => theme.colors.onBackground};
  padding: 16px;
  elevation: 2;
  border-radius: 4px;
  margin-top: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 0 16px;
  margin-bottom: 24px;
`;
