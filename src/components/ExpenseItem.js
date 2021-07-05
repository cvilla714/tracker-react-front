import React from 'react';
import './Expenseitem.css';

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2021, 7, 1);
  // const expenseTitle = 'Car Insurance';
  // const expenseAmount = 295;
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();
  return (
    // <div className="expense-item">
    //   <div>{expenseDate.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{expenseTitle}</h2>
    //     <div className="expense-item__price">{expenseAmount}</div>
    //   </div>
    // </div>

    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      {/* <div>{props.date.toLocaleString('en-US', { month: 'long' })}</div> */}
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
