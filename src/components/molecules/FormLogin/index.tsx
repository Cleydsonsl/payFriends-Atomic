import { Button } from "@app/components/atoms/Button";
import { Input } from "@app/components/atoms/Input";
import { Container, ContentInput } from "./styles";

export function FormLogin() {
  return(
    <Container>
      <ContentInput>
        <Input placeholder="Digite seu email" value=""/>
      </ContentInput>
      <ContentInput>
        <Input placeholder="Digite seu email" value=""/>
      </ContentInput>
      <Button text="ENTRAR" />
    </Container>
  )
}