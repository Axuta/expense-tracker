const CATEGORIES = ["Food", "Transport", "Entertainment", "Health", "Other"];
const MONTHS = [
  "All time", "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function Filters({ category, month, onCategoryChange, onMonthChange }) {
  return (
    <div className="filters">
      <select value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        {["All categories", ...CATEGORIES].map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <select value={month} onChange={(e) => onMonthChange(Number(e.target.value))}>
        {MONTHS.map((name, index) => (
          <option key={name} value={index}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filters;