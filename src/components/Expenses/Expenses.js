import React,{ useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = (props) => {
  const { expense } = props;
  const [filteredYear, setFilteredYear] = useState("2021");

  const updateYear = (currentValue) => {
    setFilteredYear(currentValue);
  };

  const filteredExpense = expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          filteredYear={filteredYear}
          updateYear={updateYear}
        ></ExpenseFilter>
        {filteredExpense.length === 0 ? (
          <p className="expenses-filter">No Data for year {filteredYear}</p>
        ) : (
          filteredExpense?.map(
            (item) =>
              item && (
                <ExpenseItem
                  key={item.id}
                  title={item.title}
                  amount={item.amount}
                  date={item.date}
                />
              )
          )
        )}
      </Card>
    </div>
  );
};

export default Expenses;
