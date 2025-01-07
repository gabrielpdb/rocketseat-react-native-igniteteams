import { ThemeProps } from "@theme/index"
import styled from "styled-components/native"

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: ThemeProps) => theme.COLORS.GRAY_600};
`

export const LoadIndicator = styled.ActivityIndicator.attrs(
  ({ theme }: ThemeProps) => ({
    color: theme.COLORS.GREEN_700,
  })
)``
