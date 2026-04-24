function ExpenseList({ expenses, deleteExpense }) {
  if (expenses.length === 0) {
    return (
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-3">📭</div>

        <h2 className="text-xl font-bold text-gray-700 mb-2">
          No Expenses Found
        </h2>

        <p className="text-gray-500">
          Start by adding your first expense to track your spending.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {expenses.map((exp) => (
        <div
          key={exp.id}
          className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300"
        >
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            
            {/* Left Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                ₹{exp.amount}
              </h3>

              <p className="text-sm text-purple-600 font-medium">
                {exp.category}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {exp.date}
              </p>

              {exp.note && (
                <p className="text-sm text-gray-600 mt-2">
                  📝 {exp.note}
                </p>
              )}
            </div>

            {/* Right Section */}
            <div>
              <button
                onClick={() => deleteExpense(exp.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl font-medium transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;