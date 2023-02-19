import { Image } from "@app/components/atoms/Image";
import { Container, Content } from "./styles";

export function Header() {
  return(
    <Container>
      <Content>
        <Image 
          src="/logowhite.svg" 
          alt="payfriends" 
          width={247} 
          height={51}
          layout="responsive"
          style={{width: '100%', height: '100%'}}
        />
      </Content>
      
    </Container>
  )
}