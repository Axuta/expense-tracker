import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import { loadExpenses, saveExpenses } from "./utils/storage";
import Filters from "./components/Filters";
import SummaryPanel from "./components/SummaryPanel";

function App() {
  const [expenses, setExpenses] = useState(loadExpenses);
  const [editingExpense, setEditingExpense] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("All categories");
  const [monthFilter, setMonthFilter] = useState(0);

  const addExpense = (expense) => {
    setExpenses((prev) => [expense, ...prev]);
  };

  const updateExpense = (updated) => {
    setExpenses((prev) =>
      prev.map((exp) => (exp.id === updated.id ? updated : exp))
    );
    setEditingExpense(null);
  };

  const deleteExpense = (id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  };

  const startEdit = (expense) => {
    setEditingExpense(expense);
  };

  const cancelEdit = () => {
    setEditingExpense(null);
  };

  const filteredExpenses = useMemo(() => {
    return expenses.filter((exp) => {
      const matchesCategory =
        categoryFilter === "All categories" || exp.category === categoryFilter;

      const matchesMonth =
        monthFilter === 0 ||
        new Date(exp.date).getMonth() + 1 === monthFilter;

      return matchesCategory && matchesMonth;
    });
  }, [expenses, categoryFilter, monthFilter]);

  return (
    <div>
      <Header />
      <ExpenseForm
        onAdd={addExpense}
        onUpdate={updateExpense}
        editingExpense={editingExpense}
        onCancelEdit={cancelEdit}
      />
      <Filters
        category={categoryFilter}
        month={monthFilter}
        onCategoryChange={setCategoryFilter}
        onMonthChange={setMonthFilter}
      />
      <SummaryPanel expenses={filteredExpenses} />
	  <ExpenseList
		expenses={filteredExpenses}
		onDelete={deleteExpense}
		onEdit={startEdit}
	  />
    </div>
  );
}

export default App;