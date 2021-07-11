import React, { useState } from 'react';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpensesFiter from './ExpensesFiter';
// import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';
import ExpenseItem from './ExpenseItem';

const Expenses = () => {
  const { data = [] } = useGetUserExpensesQuery();

  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  // const months = data.map((pill) => new Date(pill.date));

  // console.log(
  //   months.filter((item) => {
  //     return item.toLocaleString('en-US', { year: 'numeric' }) === filterYear;
  //   }),
  // );

  console.log(data);

  console.log(
    data.filter((item) => {
      return (
        new Date(item.date).toLocaleString('en-US', { year: 'numeric' }) ===
        filterYear
      );
    }),
  );

  const filteredExpenses = data.filter((month) => {
    return (
      new Date(month.date).toLocaleString('en-US', { year: 'numeric' }) ===
      filterYear
    );
  });

  let expensesContent = <h2 className="text-warning">No Expenes Found</h2>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFiter
          selected={filterYear}
          onChangeFitler={filterChangeHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        {/* <ExpensesList data={filteredExpenses} /> */}
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
