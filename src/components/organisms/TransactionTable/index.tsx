import { Table } from "@app/components/molecules/Table";
import { Container, Content, ContentButton } from "./styles";
import { Text } from "@app/components/atoms/Text";
import { Button } from "@app/components/atoms/Button";
import { Modal } from "@app/components/atoms/Modal";
import { useModal } from "@app/hooks/useModal";
import { TransactionModal } from "@app/components/molecules/TransactioModal";
import { Filter } from "@app/components/molecules/Filter";

const rows = [
  { user: 1, title: "John Doe", date: 30, value: 20, check: "ok" },
  { user: 1, title: "John Doe", date: 30, value: 20, check: "ok" },
  { user: 1, title: "John Doe", date: 30, value: 20, check: "ok" },
  { user: 1, title: "John Doe", date: 30, value: 20, check: "ok" },
  { user: 1, title: "John Doe", date: 30, value: 20, check: "ok" },
];

const headers = [
  { label: "Usuário", key: "user" },
  { label: "Título", key: "title" },
  { label: "Data", key: "date" },
  { label: "Valor", key: "Value" },
  { label: "Pago", key: "check" },
]

export function TransactionTable() {
  const { isOpen, openModal, closeModal } = useModal();

  console.log(isOpen, "isOpen")

  return (
    <Container>
      <TransactionModal closeModal={closeModal} isOpen={isOpen}/>
      <Content>
        <Text 
          text="Meus pagamentos"
          styles={{fontSize: "36px", color: "#4E4E4E", fontWeight: "bold"}}
        />
        <ContentButton>
          <Button text="ADICIONAR PAGAMENTO" onClick={openModal} />
        </ContentButton>
        
      </Content>
      <Filter/>
      <Table headers={headers} rows={rows} />
    </Container>
  )
}