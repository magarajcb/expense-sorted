const Sort = ({ setSortType }) => {
  return (
    <select onChange={(e) => setSortType(e.target.value)}>
      <option value="">Sort</option>
      <option value="high">High → Low</option>
      <option value="low">Low → High</option>
    </select>
  );
};

export default Sort;