import { Container, IIconProps } from "./styles";

export function Icon({icon: IconComponent, size=10 , className, color= 'inherit'}: IIconProps) {
  return (
    <Container size={size} color={color} className={className}>
      <IconComponent/>
    </Container>
  )
}