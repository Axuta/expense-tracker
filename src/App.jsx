import { useState } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };
  
  const deleteExpense = (id) => {
	  setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <Header />
      <ExpenseForm onAdd={addExpense} />
	  <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;