const Sort = ({ setSortType }) => {
  return (
    <div className="w-full md:w-72">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Sort by Amount
      </label>

      <select
        onChange={(e) => setSortType(e.target.value)}
        className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple-200"
      >
        <option value="">Default Sorting</option>
        <option value="high">⬇ High → Low</option>
        <option value="low">⬆ Low → High</option>
      </select>
    </div>
  );
};

export default Sort;