import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  //   const [enterTitle, setEnterTitle] = useState('');
  //   const [enterAmount, setEnterAmount] = useState('');
  //   const [enterDate, setEnterDate] = useState('');
  const [userInput, setUserInput] = useState({
    enterTitle: '',
    enterAmount: '',
    enterDate: '',
  });
  const titleChangeHandler = (e) => {
    // console.log('title changed');
    // console.log(e.target.value);
    // setEnterTitle(e.target.value);
    setUserInput({
      ...userInput,
      enterTitle: e.target.value,
    });
    console.log(e.target.value);
  };

  const amountHandler = (e) => {
    // setEnterAmount(e.target.value);
    setUserInput({
      ...userInput,
      enterAmount: e.target.value,
    });
    console.log(e.target.value);
  };

  const datetHandler = (e) => {
    //   setEnterDate({
    setUserInput({
      ...userInput,
      enterDate: e.target.value,
    });
    console.log(e.target.value);
  };
  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={datetHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
