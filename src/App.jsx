import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilters from "./components/ExpenseFilters";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

function App() {

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("All");

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  return (
    <div className="container">

      <h1>💰 My  financial diary</h1>
      <p><strong>Add expense</strong></p>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseFilters filter={filter} setFilter={setFilter} />

      <ExpenseList expenses={filteredExpenses} deleteExpense={deleteExpense} />

      <ExpenseChart expenses={filteredExpenses} />

    </div>
  );
}

export default App;