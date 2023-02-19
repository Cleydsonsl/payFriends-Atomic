import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 60px;
  background: ${theme.colors.primary};
`;

export const Content = styled.div`
  max-width: 12%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;