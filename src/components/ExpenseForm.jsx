import { useState } from "react";

function ExpenseForm({ addExpense }) {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!amount || Number(amount) <= 0) {
      newErrors.amount = "Please enter a valid amount";
    }

    if (!date) {
      newErrors.date = "Please select a date";
    }

    if (note.trim().length > 50) {
      newErrors.note = "Note should be less than 50 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    addExpense({
      amount: Number(amount),
      category,
      date,
      note,
    });

    setAmount("");
    setCategory("Food");
    setDate("");
    setNote("");
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
    >
      {/* Amount */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Amount (₹)
        </label>

        <input
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.amount
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-purple-200"
          }`}
        />

        {errors.amount && (
          <p className="text-red-500 text-sm mt-1">
            {errors.amount}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-200"
        >
          <option>Food</option>
          <option>Travel</option>
          <option>Bills</option>
          <option>Shopping</option>
          <option>Health</option>
          <option>Entertainment</option>
          <option>Others</option>
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Date
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.date
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-purple-200"
          }`}
        />

        {errors.date && (
          <p className="text-red-500 text-sm mt-1">
            {errors.date}
          </p>
        )}
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Note
        </label>

        <input
          type="text"
          placeholder="Expense note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className={`w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 ${
            errors.note
              ? "border-red-500 focus:ring-red-200"
              : "border-gray-300 focus:ring-purple-200"
          }`}
        />

        {errors.note && (
          <p className="text-red-500 text-sm mt-1">
            {errors.note}
          </p>
        )}
      </div>

      {/* Button */}
      <div className="md:col-span-2 lg:col-span-4">
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300"
        >
          + Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;