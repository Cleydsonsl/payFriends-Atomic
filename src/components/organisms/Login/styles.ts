import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`;

export const ContentForm = styled.span`
  width: 40%;
  height: 100%;
  padding: 100px;
`;

export const ContentBrand = styled.span`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.shape};
`;

export const ContentTitle = styled.span`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 80px;
`;