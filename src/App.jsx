import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <Header />
      <p>Total expenses: {expenses.length}</p>
    </div>
  );
}

export default App;