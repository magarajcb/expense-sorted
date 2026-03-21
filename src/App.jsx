import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilters from "./components/ExpenseFilters";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Sort from "./components/Sort";
import SortedChart from "./components/SortedChart";
function App() {
const [sortType, setSortType] = useState("");
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
      const sortedExpenses = [...filteredExpenses].sort((a, b) => {
  if (sortType === "high") return b.amount - a.amount;
  if (sortType === "low") return a.amount - b.amount;
  return 0;
});

  return (
    <div className="container">

      <h1>💰 My  financial diary</h1>
      <p><strong>Add expense</strong></p>

      <ExpenseForm addExpense={addExpense} />

      <ExpenseFilters filter={filter} setFilter={setFilter} />
      <Sort setSortType={setSortType} /> 

      <ExpenseList expenses={sortedExpenses} deleteExpense={deleteExpense} />
<ExpenseChart expenses={sortedExpenses} />
<SortedChart expenses={sortedExpenses} /> 

      

    </div>
  );
}

export default App;