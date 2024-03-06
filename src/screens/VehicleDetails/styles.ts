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
  font-size: 12px;
  text-align: center;
  margin-top: 8px;
  padding: 0 16px;
`;

export const PriceChip = styled.View`
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.selectedBackgroundChip};
  align-self: center;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 8px;

  padding: 6px 14px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bolt};
  color: ${({ theme }) => theme.colors.onBackground};
`;

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const GobackText = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  margin-left: 8px;
`;

export const Padding = styled.View`
  padding: 16px;
`;

export const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
