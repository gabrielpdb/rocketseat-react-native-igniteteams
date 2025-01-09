import { MyThemeProps } from "@theme/index"
import styled from "styled-components/native"

export const Container = styled.View`
  width: 100%;
  margin: 32px 0;
`

export const Title = styled.Text`
  text-align: center;
  font-size: ${({ theme }: MyThemeProps) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }: MyThemeProps) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }: MyThemeProps) => theme.COLORS.WHITE};
`

export const Subtitle = styled.Text`
  text-align: center;
  font-size: ${({ theme }: MyThemeProps) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: MyThemeProps) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: MyThemeProps) => theme.COLORS.GRAY_300};
`
