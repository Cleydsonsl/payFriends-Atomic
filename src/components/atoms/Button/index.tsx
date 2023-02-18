import { Container } from "./styles";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export function Button({text, onClick, ...rest}: ButtonProps) {
  return (
    <Container {...rest}>
      {text}
    </Container>
  )
}