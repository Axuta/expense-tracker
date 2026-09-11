import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  return (
    <div>
      <Header />
      <ExpenseForm onAdd={addExpense} />
    </div>
  );
}

export default App;