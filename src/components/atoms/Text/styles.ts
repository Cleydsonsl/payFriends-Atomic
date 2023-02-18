import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export interface IStyleTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
}

export const Container = styled.span<IStyleTextProps>`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  letter-spacing: ${props => props.letterSpacing};
`;