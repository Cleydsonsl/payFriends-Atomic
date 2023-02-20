import React, { ReactNode } from "react";
import { ModalContainer, ModalContent, ModalOverlay } from "./styles";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ children, isOpen, onClose }: IModalProps) {

  const handleClose = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return isOpen ? (
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </ModalOverlay>
  ) : null;
};