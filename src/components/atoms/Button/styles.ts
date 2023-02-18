
import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background: ${theme.colors.primary};
  color: ${theme.colors.shape};
  font-weight: 700;
  padding: 15px;
  border: none;
  border-radius: 5px;
`;