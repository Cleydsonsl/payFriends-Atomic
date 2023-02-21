import { IInputProps } from "@app/types";
import { Container } from "./styles";

export function Input({placeholder, value}: IInputProps) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
    />
  )
}