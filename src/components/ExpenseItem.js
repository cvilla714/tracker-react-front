import React from 'react';
import './Expenseitem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>Thursday July 1st 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$295</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
