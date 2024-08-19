import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Form from "./components/Form";
import Dashboard from "./components/Dashboard";

const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = React.useState(
    data ? JSON.parse(data) : []
  );

  React.useEffect(() => {
    // Calcula income, expense, and total aqui...
  }, [transactionsList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionsList, transaction];
    setTransactionsList(newArrayTransactions);
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  };

  const income = transactionsList
    .filter((transaction) => !transaction.expense)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const expense = transactionsList
    .filter((transaction) => transaction.expense)
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const total = income - expense;

  // Formata os valores com duas casas decimais
  const formattedIncome = `R$ ${income.toFixed(2).replace(".", ",")}`;
  const formattedExpense = `R$ ${expense.toFixed(2).replace(".", ",")}`;
  const formattedTotal = `R$ ${total.toFixed(2).replace(".", ",")}`;

  
  return (
    <>
      <Header />
      <Resume income={formattedIncome} expense={formattedExpense} total={formattedTotal} />
      <Dashboard transactionsList={transactionsList} />
      <Form handleAdd={handleAdd} transactionsList={transactionsList} setTransactionsList={setTransactionsList} />
      <GlobalStyle />
    </>
  );
};

export default App;
