import { useState, useEffect } from "react";

const CATEGORIES = ["Food", "Transport", "Entertainment", "Health", "Other"];

function ExpenseForm({ onAdd, onUpdate, editingExpense, onCancelEdit }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (editingExpense) {
      setAmount(editingExpense.amount);
      setCategory(editingExpense.category);
      setComment(editingExpense.comment);
    }
  }, [editingExpense]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || Number(amount) <= 0) {
      setError("Amount must be a positive number");
      return;
    }

    if (editingExpense) {
      onUpdate({
        ...editingExpense,
        amount: Number(amount),
        category,
        comment: comment.trim(),
      });
    } else {
      onAdd({
        id: crypto.randomUUID(),
        amount: Number(amount),
        category,
        comment: comment.trim(),
        date: new Date().toISOString(),
      });
    }

    setAmount("");
    setComment("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

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

      <div className="form-buttons">
        <button type="submit">{editingExpense ? "Save" : "Add"}</button>
        {editingExpense && (
          <button type="button" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>

      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default ExpenseForm;