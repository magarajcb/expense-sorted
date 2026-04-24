function ExpenseFilters({ filter, setFilter }) {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
        
        {/* Category Filter */}
        <div className="w-full md:w-72">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Filter by Category
          </label>

          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <option value="All">All Categories</option>
            <option value="Food">🍔 Food</option>
            <option value="Travel">✈️ Travel</option>
            <option value="Bills">📄 Bills</option>
            <option value="Shopping">🛍️ Shopping</option>
            <option value="Health">💊 Health</option>
            <option value="Entertainment">🎬 Entertainment</option>
            <option value="Others">📦 Others</option>
          </select>
        </div>

        {/* Active Filter Display */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-3">
          <p className="text-sm text-gray-500">
            Current Filter
          </p>

          <h3 className="text-lg font-bold text-blue-700">
            {filter}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ExpenseFilters;