import { IButtonProps } from "@app/types";
import { Container } from "./styles";

export function Button({text, onClick, disabled, ...rest}: IButtonProps) {
  return (
    <Container {...rest} onClick={onClick} type="submit" disabled={disabled}>
      {text}
    </Container>
  )
}