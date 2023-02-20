import { Icon } from "@app/components/atoms/Icon";
import { Input } from "@app/components/atoms/Input";
import { Modal } from "@app/components/atoms/Modal";
import { Text } from "@app/components/atoms/Text";
import { FaUser } from "react-icons/fa";
import { ButtonCancel, ButtonSave, Container, ContentInput, Title } from "./styles";

interface TransactionModalProps  {
  isOpen: boolean;
  closeModal: () => void;
}

export function TransactionModal({isOpen, closeModal}:TransactionModalProps) {
  

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <Title>
          <Text 
            text="Adicionar pagamento"
            styles={{
              fontSize: "36px",
              fontWeight: "700"
            }}
          />
        </Title>

      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <Input placeholder="Usuario" value=""/>
      </ContentInput>
      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <Input placeholder="Data" value=""/>
      </ContentInput>
      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <Input placeholder="Valor" value=""/>
      </ContentInput>
      <ContentInput>
        <Icon icon={FaUser} color="#D1D1D1" size={18}/>
        <Input placeholder="Titulo" value=""/>
      </ContentInput>
      <ButtonSave text="SALVAR" />

      <ButtonCancel text="CANCELAR" onClick={closeModal} />

      </Modal>
    </Container>
  )
}