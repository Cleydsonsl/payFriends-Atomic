import { Button } from "@app/components/atoms/Button";
import { IButtonProps } from "@app/types";
import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 70px;
  border-radius: 5px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-bottom: 60px;
`;

export const ContentButton = styled.span`
  width: 333px;
  display: flex;
`;

export const ButtonPayment = styled(Button)<IButtonProps>`
  font-weight: 700;
  font-size: 18px;
  background: ${theme.colors.secondary};
`