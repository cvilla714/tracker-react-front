import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [isShowingForm, setIsShowForm] = useState(false);

  const saveExpenseDataHandle = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  const showtheForm = () => {
    setIsShowForm(true);
  };

  const stopShowingForm = () => {
    setIsShowForm(false);
  };
  return (
    <div className="new-expense">
      {isShowingForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandle}
          onCancel={stopShowingForm}
        />
      )}
      {!isShowingForm && (
        <button type="clicked" onClick={showtheForm}>
          Add New Expense
        </button>
      )}

      {/* <ExpenseForm onSaveExpenseData={saveExpenseDataHandle} /> */}
    </div>
  );
};

export default NewExpense;
