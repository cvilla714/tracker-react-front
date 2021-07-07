import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpensesFiter from './ExpensesFiter';

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');

  const filterChangeHandler = (selectedyear) => {
    // console.log('coming from Expenses.js');
    // console.log(selectedyear);
    setFilterYear(selectedyear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFiter
          selected={filterYear}
          onChangeFitler={filterChangeHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </div>
  );
};

export default Expenses;
