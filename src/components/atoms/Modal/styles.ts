import { theme } from "@app/ui/themes/payTheme";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  padding: 24px;
  width: 80%;
  max-width: 600px;
  max-height: 90%;
  overflow-y: auto;
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;