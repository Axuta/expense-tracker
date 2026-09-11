import { useState, useEffect } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { loadExpenses, saveExpenses } from "./utils/storage";

function App() {
  const [expenses, setExpenses] = useState(loadExpenses);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };
  
  const deleteExpense = (id) => {
	  setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };
  
  useEffect(() => {
	  localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div>
      <Header />
      <ExpenseForm onAdd={addExpense} />
	  <ExpenseList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App;