import { Button } from "@app/components/atoms/Button";
import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${theme.colors.shape};
  padding: 25px;
  border-radius: 5px 5px 0 0;
  
`;

export const Content = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: row;
`;

export const ContentInput = styled.span`
  width: 100%;
  background: transparent;
  border: solid 2px ${theme.colors.border};
  border-radius: 5px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  margin-right: 10px;
`;

export const ButtonFilter = styled(Button)`
  background: ${theme.colors.secondary};
  font-weight: 700;
  font-size: 18px;
  width: 30%;
`;