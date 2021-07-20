import { useContext } from "react";

import { TransactionsContext } from "../../TransactionsContext";

import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles"

function Summary() {
  const { transactions } = useContext(TransactionsContext);

  // const totalDeposit = transactions.reduce((acumulador, transaction) => {
  //   if(transaction.type === 'deposit') {
  //     return acumulador + transaction.amount;
  //   }
  //   return acumulador;
  // }, 0);

  const summary = transactions.reduce((acumulador, transaction) => {
    if (transaction.type === 'deposit') {
      acumulador.deposits += transaction.amount;
      acumulador.total += transaction.amount;
    } else {
      acumulador.withdraw += transaction.amount;
      acumulador.total -= transaction.amount;
    }
    return acumulador;
  }, { deposits: 0, withdraw: 0, total: 0 });

  return (
    <Container>

      {/* Esse é o método antigo
      <TransactionsContext.Consumer>
        {(data) => {
          console.log(data);
          return <p>Ok</p>
        }}
      </TransactionsContext.Consumer> */}

      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: "BRL",
          }).format(summary.deposits)
        }</strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: "BRL",
          }).format(summary.withdraw)
        }</strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: "BRL",
          }).format(summary.total)
        }</strong>
      </div>
    </Container>
  )
}

export { Summary }