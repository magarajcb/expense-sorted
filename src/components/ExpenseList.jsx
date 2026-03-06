function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="card text-center text-slate-400">
               No expenses found
      </div>
    );
  }

  return (
    <div>

      {expenses.map((exp) => (

        <div key={exp.id} className="expense-item">

          <p>₹{exp.amount} • {exp.category}</p>

          <p>{exp.date} - {exp.note}</p>

          <button onClick={() => deleteExpense(exp.id)}>
            Delete
          </button>

        </div>

      ))}

    </div>
  );
}

export default ExpenseList;