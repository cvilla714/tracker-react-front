import React, { useState } from 'react';
import Expenses from './Expenses';
import NewExpense from '../NewExpense/NewExpense';
import { useGetUserExpensesQuery } from '../../features/user/statusSlice';

const Home = () => {
  const { data = [] } = useGetUserExpensesQuery();
  // console.log(data);

  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    // console.log('In Home.js');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
    // setExpenses([expense, ...expenses]);
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default Home;
