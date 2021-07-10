import React, { useState } from 'react';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpensesFiter from './ExpensesFiter';
import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const Expenses = (props) => {
  const { data = [] } = useGetUserExpensesQuery();

  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedyear) => {
    setFilterYear(selectedyear);
  };

  // console.log(filterYear);
  // console.log(data);

  // console.log(data.filter((month) => month.title === 'wallmart'));

  // console.log(data.map((pill) => pill.date));

  // console.log(data.map((pill) => new Date(pill.date)));

  const months = data.map((pill) => new Date(pill.date));

  console.log(
    months.filter((item) => {
      return item.toLocaleString('en-US', { year: 'numeric' }) === filterYear;
    }),
  );

  const filteredExpenses = months.filter((month) => {
    return month.toLocaleString('en-US', { year: 'numeric' }) === filterYear;
  });

  // const dyear = data.filter((month) => {
  //   return (
  //     month.date.toLocaleString('en-US', { year: 'numeric' }) === filterYear
  //   );
  // });

  // console.log(props.items);
  // const filteredExpenses = props.items.filter((expense) => {
  //   return (
  //     expense.date.toLocaleString('en-US', { year: 'numeric' }) === filterYear
  //   );
  // });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFiter
          selected={filterYear}
          onChangeFitler={filterChangeHandler}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        <ExpensesList items={filteredExpenses} />
        {/* <ExpensesList /> */}
      </Card>
    </div>
  );
};

export default Expenses;
