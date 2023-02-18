import { Container } from "./styles";

interface IInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
}

export function Input({placeholder, value}: IInputProps) {
  return (
    <Container
      placeholder={placeholder}
      value={value}
    />
  )
}