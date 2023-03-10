import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContentInput = styled.span`
  width: 100%;
  background: transparent;
  border: solid 2px ${theme.colors.border};
  border-radius: 5px;
  padding: 15px 20px;
  margin-bottom: 8px;
`