import { useState } from "react";

function ExpenseForm({ addExpense }) {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addExpense({ amount, category, date, note });

    setAmount("");
    setDate("");
    setNote("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Travel</option>
        <option>Bills</option>
        <option>Others</option>
      </select>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <button>Add Expense</button>

    </form>
  );
}

export default ExpenseForm;