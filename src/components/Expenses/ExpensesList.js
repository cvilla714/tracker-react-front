import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const ExpensesList = (props) => {
  const { data = [] } = useGetUserExpensesQuery();
  // const [getUserExpenses] = useGetUserExpensesQuery();
  if (props.items.length === 0) {
    return <h2 className="text-warning">No Expenes Found</h2>;
  }

  return (
    <ul className="expenses-list">
      {/* <button onClick={() => getUserExpenses()}>You List</button> */}
      {/* {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

      {data.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
