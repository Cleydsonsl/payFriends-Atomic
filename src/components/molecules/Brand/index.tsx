import { Image } from "@app/components/atoms/Image";
import { Container } from "./styles";

export function Brand(){
  return (
    <Container>
      <Image 
        src="/brand.svg" 
        alt="brand" 
        width={900}
        height={900}
        layout="responsive"
        style={{width: '100%', height: '100%'}}
      />
    </Container>
  )
}