import styled, { css } from "styled-components/native";

export const Container = styled.View<{ showPadding: boolean }>`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  ${({ showPadding = true }) =>
    showPadding &&
    css`
      padding: 16px;
    `}
`;
