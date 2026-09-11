import { useState } from "react";

const CATEGORIES = ["Food", "Transport", "Entertainment", "Health", "Other"];

function ExpenseForm({ onAdd }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      setError("Amount must be a positive number");
      return;
    }

    const newExpense = {
      id: crypto.randomUUID(),
      amount: Number(amount),
      category,
      comment: comment.trim(),
      date: new Date().toISOString(),
    };

    onAdd(newExpense);
    setAmount("");
    setComment("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Expense</h2>

      <input
        type="number"
        min="0"
        step="0.01"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;