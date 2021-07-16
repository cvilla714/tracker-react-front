import React, { useState } from 'react';
import './ExpenseForm.css';
import { usePostUserExpensesMutation } from '../../features/user/statusSlice';
import { useGetLoginUserInfoQuery } from '../../features/user/statusSlice';
import useForm from '../Hooks/useForm';

const ExpenseForm = (props) => {
  // const [enterTitle, setEnterTitle] = useState('');
  // const [enterAmount, setEnterAmount] = useState('');
  // const [enterDate, setEnterDate] = useState('');

  // console.log(props);

  const { form, handleChange, clearForm } = useForm({
    title: '',
    amount: '',
    date: '',
  });

  const [postUserExpenses] = usePostUserExpensesMutation();
  const { data: userid } = useGetLoginUserInfoQuery();

  // const titleChangeHandler = (e) => {
  //   setEnterTitle(e.target.value);
  //   console.log(e.target.value);
  // };

  // const amountHandler = (e) => {
  //   setEnterAmount(e.target.value);
  //   console.log(e.target.value);
  // };

  // const datetHandler = (e) => {
  //   setEnterDate(e.target.value);
  //   console.log(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenseData = {
      // title: enterTitle,
      // amount: +enterAmount,
      // date: new Date(enterDate).toLocaleDateString(),
      // user_id: data.user.id,
      user_id: userid.user.id,
      // date: new Date(enterDate),
      title: form.title,
      amount: form.amount,
      date: new Date(form.date).toLocaleDateString(),
    };

    postUserExpenses(expenseData);
    clearForm();
    // props.onSaveExpenseData(expenseData);
    // setEnterTitle('');
    // setEnterAmount('');
    // setEnterDate('');
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            // name="enterTitle"
            // value={enterTitle}
            // onChange={titleChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={form.amount}
            onChange={handleChange}
            // name="enterAmount"
            // value={enterAmount}
            // onChange={amountHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={form.date}
            onChange={handleChange}
            // name="enterDate"
            // value={enterDate}
            // onChange={datetHandler}
            required
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
