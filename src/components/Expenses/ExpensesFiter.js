import React from 'react';
import './ExpenseFilter.css';

const ExpensesFiter = (props) => {
  const handleClick = (e) => {
    console.log(e.target.value);
    props.onChangeFitler(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={handleClick}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFiter;
