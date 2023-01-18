import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const { filteredYear, updateYear } = props;

  const changevalue = (event) => {
    updateYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={filteredYear} onChange={changevalue}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
