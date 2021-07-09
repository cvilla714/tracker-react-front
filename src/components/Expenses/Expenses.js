import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpensesFiter from './ExpensesFiter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (
      expense.date.toLocaleString('en-US', { year: 'numeric' }) === filterYear
    );
  });

  // let expensesContent = <p className="text-warning">No Expenses found</p>;

  // if (filteredExpenses.length > 0) {
  //   expensesContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFiter
          selected={filterYear}
          onChangeFitler={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
        {/* {expensesContent} */}
        {/* {filteredExpenses.length === 0 ? (
          <p className="text-warning">No Expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* {filteredExpenses.length === 0 && (
          <p className="text-warning">No Expenses found</p>
        )}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
