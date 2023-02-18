import { Image } from "@app/components/atoms/Image";
import { Text } from "@app/components/atoms/Text";
import { Brand } from "@app/components/molecules/Brand";
import { FormLogin } from "@app/components/molecules/FormLogin";
import { Container, ContentBrand, ContentForm } from "./styles";

export function LoginOr() {
  return(
    <Container>
      <ContentForm>
        <Image 
          src="/PayFriends.svg" 
          alt="payfriends" 
          width={165}
          height={39}
        />
        <Text 
          text="Bem-vindo de volta"
          styles={{
            fontSize: "36px", 
            fontWeight: "700",
            color: "#4E4E4E"
          }}
        />
        <FormLogin/>
      </ContentForm>
      <ContentBrand>
        <Brand/>
      </ContentBrand>
    </Container>
  )
}