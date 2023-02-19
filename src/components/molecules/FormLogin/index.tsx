import { Button } from "@app/components/atoms/Button";
import { Icon } from "@app/components/atoms/Icon";
import { Input } from "@app/components/atoms/Input";
import { Container, ContentInput } from "./styles";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/router";

export function FormLogin() {

  const router = useRouter();

  function handleClick() {
    router.push("/Dashboard");
  }
  return(
    <Container>
      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <Input placeholder="Email" value=""/>
      </ContentInput>
      <ContentInput>
        <Icon icon={FaLock} color="#D1D1D1" size={18}/>
        <Input placeholder="Senha" value=""/>
      </ContentInput>
      <Button text="ENTRAR" onClick={handleClick}/>
    </Container>
  )
}