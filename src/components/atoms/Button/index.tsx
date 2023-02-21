import { Container } from "./styles";
import { IButtonProps } from "@app/types";

export function Button({text, onClick, ...rest}: IButtonProps) {
  return (
    <Container {...rest} onClick={onClick}>
      {text}
    </Container>
  )
}