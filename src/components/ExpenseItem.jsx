function ExpenseItem({ expense, onDelete }) {
  return (
    <div className="expense-item">
      <span className="expense-amount">{expense.amount.toFixed(2)} BYN</span>
      <span className="expense-category">{expense.category}</span>
      <span className="expense-comment">{expense.comment}</span>
      <button onClick={() => onDelete(expense.id)}>✕</button>
    </div>
  );
}

export default ExpenseItem;