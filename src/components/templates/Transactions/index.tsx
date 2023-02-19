import { Header } from "@app/components/organisms/Header";
import { TransactionTable } from "@app/components/organisms/TransactionTable";
import { Container } from "./styles";

export function Transactions() {
  return(
    <Container>
      <Header />
      <TransactionTable/>
    </Container>
  )
}