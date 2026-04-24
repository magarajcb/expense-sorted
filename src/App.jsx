import { useState, useEffect } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseFilters from "./components/ExpenseFilters";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";
import Sort from "./components/Sort";
import SortedChart from "./components/SortedChart";

function App() {
  const [sortType, setSortType] = useState("");
  const [filter, setFilter] = useState("All");

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Add Expense
  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  // Filter by Category
  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((e) => e.category === filter);

  // Sort by Amount
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (sortType === "high") return b.amount - a.amount;
    if (sortType === "low") return a.amount - b.amount;
    return 0;
  });

  // Total Expense
  const totalExpense = sortedExpenses.reduce(
    (total, item) => total + Number(item.amount),
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-3">
            💰 My Financial Diary
          </h1>

          <p className="text-gray-500 text-base md:text-lg">
            Smart Expense Tracker Dashboard
          </p>

          {/* Summary Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-purple-100 rounded-2xl p-5">
              <p className="text-sm text-gray-600">
                Total Expenses
              </p>

              <h2 className="text-2xl font-bold text-purple-700">
                ₹{totalExpense}
              </h2>
            </div>

            <div className="bg-blue-100 rounded-2xl p-5">
              <p className="text-sm text-gray-600">
                Total Entries
              </p>

              <h2 className="text-2xl font-bold text-blue-700">
                {sortedExpenses.length}
              </h2>
            </div>

            <div className="bg-green-100 rounded-2xl p-5">
              <p className="text-sm text-gray-600">
                Current Filter
              </p>

              <h2 className="text-2xl font-bold text-green-700">
                {filter}
              </h2>
            </div>
          </div>
        </div>

        {/* Add Expense Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            ➕ Add New Expense
          </h2>

          <ExpenseForm addExpense={addExpense} />
        </div>

        {/* Filter + Sort Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            🔍 Filter & Sort Expenses
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ExpenseFilters
              filter={filter}
              setFilter={setFilter}
            />

            <Sort
              setSortType={setSortType}
            />
          </div>
        </div>

        {/* Expense List Section */}
        <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            📋 Expense History
          </h2>

          <ExpenseList
            expenses={sortedExpenses}
            deleteExpense={deleteExpense}
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <ExpenseChart expenses={sortedExpenses} />
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <SortedChart expenses={sortedExpenses} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;