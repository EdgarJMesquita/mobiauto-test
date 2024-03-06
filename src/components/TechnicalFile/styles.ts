import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.onBackground};
  margin-top: 16px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bolt};
  text-align: center;
  margin-bottom: 16px;
`;

export const ItemContainer = styled.View`
  width: 100%;
  flex-direction: row;
  border-bottom-width: 1px;
  border-bottom-color: rgb(224, 224, 224);
  padding: 8px 0;
`;

export const ItemLabel = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const ItemValue = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
