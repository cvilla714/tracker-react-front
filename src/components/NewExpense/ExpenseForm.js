import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setEnterAmount] = useState('');
  const [enterDate, setEnterDate] = useState('');

  const titleChangeHandler = (e) => {
    setEnterTitle(e.target.value);
    console.log(e.target.value);
  };

  const amountHandler = (e) => {
    setEnterAmount(e.target.value);
    console.log(e.target.value);
  };

  const datetHandler = (e) => {
    setEnterDate(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnterTitle('');
    setEnterAmount('');
    setEnterDate('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="enterTitle"
            value={enterTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="enterAmount"
            value={enterAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="enterDate"
            value={enterDate}
            onChange={datetHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
