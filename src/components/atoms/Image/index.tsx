import { Container, ImageProps } from "./styles";

export function Image(props: ImageProps) {
  return (
    <Container 
      src={props.src} 
      alt={props.alt} 
      width={props.width} 
      height={props.height}
      layout={props.layout}
      style={props.style}
    />
  )
}