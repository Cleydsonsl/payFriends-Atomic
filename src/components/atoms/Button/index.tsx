import { Container } from "./styles";

export interface ButtonProps {
  text: string;
}

export function Button({text, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}