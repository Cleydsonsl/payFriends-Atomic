import { Button } from "@app/components/atoms/Button";
import { ButtonProps } from "@app/types";
import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentInput = styled.span`
  width: 100%;
  background: transparent;
  border: solid 2px ${theme.colors.border};
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const Title = styled.div`
  padding-bottom: 70px;
`;

export const ButtonCancel = styled(Button)<ButtonProps>`
  color: ${theme.colors.text};
  background: ${theme.colors.background};
  font-weight: 700;
  margin-top: 10px;
  font-size: 18px;
`;

export const ButtonSave = styled(Button)<ButtonProps>`
  font-weight: 700;
  font-size: 18px;
`;