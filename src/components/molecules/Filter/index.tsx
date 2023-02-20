import { Icon } from "@app/components/atoms/Icon";
import { Input } from "@app/components/atoms/Input";
import { FaSistrix } from "react-icons/fa";
import { ButtonFilter, Container, Content, ContentInput } from "./styles";

export function Filter() {
  return (
    <Container>
      <Content>
      <ContentInput>
        <Input placeholder="Usuario" value=""/>
        <Icon icon={FaSistrix} color="#D1D1D1" size={18}/>
      </ContentInput>
      <ButtonFilter text="Filtrar" />
      </Content>
    </Container>
  )
}