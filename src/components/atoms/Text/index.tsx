import { Container, IStyleTextProps } from "./styles";

interface IAtomicTextProps {
  text: string;
  styles?: IStyleTextProps;
}

export function Text({text, styles}: IAtomicTextProps){
  return(
    <Container {...styles}>
      {text}
    </Container>
  )
}