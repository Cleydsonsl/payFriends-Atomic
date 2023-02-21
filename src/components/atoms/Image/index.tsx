import { IImageProps } from "@app/types";
import { Container } from "./styles";

export function Image(props: IImageProps) {
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