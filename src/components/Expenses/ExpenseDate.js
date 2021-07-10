import React from 'react';
import './ExpenseDate.css';
// import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const ExpenseDate = (props) => {
  // const { data = [] } = useGetUserExpensesQuery();

  // console.log({ data });

  console.log(props.date);

  const newmonth = new Date(props.date);
  console.log(newmonth);
  const month = new Date(props.date).toLocaleString('en-US', { month: 'long' });
  const day = new Date(props.date).toLocaleString('en-US', { day: '2-digit' });
  const year = new Date(props.date).toLocaleString('en-US', {
    year: 'numeric',
  });
  console.log(month);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
};

export default ExpenseDate;
