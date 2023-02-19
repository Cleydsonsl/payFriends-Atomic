import { Image } from "@app/components/atoms/Image";
import { Container } from "./styles";

export function Logo() {
  return(
    <Container>
      <Image 
        src="/logowhite.svg" 
        alt="payfriends" 
        width={247} 
        height={51}
        layout="responsive"
        style={{width: '100%', height: '100%'}}
      />
    </Container>
  )
}