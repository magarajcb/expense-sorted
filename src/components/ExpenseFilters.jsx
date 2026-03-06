function ExpenseFilters({ filter, setFilter }) {

  return (
    <div className="filter">
      <h2 className="section-title">Filter by Category</h2>


      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Bills">Bills</option>
        <option value="Others">Others</option>
      </select>

    </div>
  );
}

export default ExpenseFilters;