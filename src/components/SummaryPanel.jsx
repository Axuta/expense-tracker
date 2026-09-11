function SummaryPanel({ expenses }) {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const byCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  const percentages = Object.entries(byCategory).map(([category, sum]) => ({
    category,
    sum,
    pct: total > 0 ? Math.round((sum / total) * 100) : 0,
  }));

  if (expenses.length === 0) return null;

  return (
    <div className="summary">
      <h3>Total: {total.toFixed(2)} BYN</h3>
      <ul>
        {percentages.map(({ category, sum, pct }) => (
          <li key={category}>
            <span>{category}</span>
            <div className="bar">
              <div className="bar-fill" style={{ width: `${pct}%` }}></div>
            </div>
            <span>
              {sum.toFixed(2)} BYN ({pct}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SummaryPanel;