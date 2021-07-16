import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../Ui/Card';
import ExpenseForm from '../NewExpense/ExpenseForm';
import { Button, Modal } from 'react-bootstrap';
import {
  useUpdateExpensesMutation,
  useGetUserExpensesQuery,
} from '../../features/user/statusSlice';

const ExpenseItem = ({ date, title, amount, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    console.log(data.find((item) => item.id === +e.target.id));
    let updateItem = data.find((item) => item.id === +e.target.id);
  };
  // console.log(handleShow());

  const [updateExpenses, { isLoading: isUpdating }] =
    useUpdateExpensesMutation();
  const { data } = useGetUserExpensesQuery();

  const handleUpdate = (e) => {
    // console.log(updateItem);
    // updateExpenses(change);
    // console.log(e.target);

    handleShow();
    // updateExpenses(updateItem);
    // console.log(updateExpenses(updateItem));
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Expense Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ExpenseForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <li>
        <Card className="expense-item">
          <ExpenseDate date={date} />
          <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">{amount}</div>
            <Button id={id} variant="primary" onClick={handleShow}>
              Update the Expense
            </Button>
            {/* <button id={id} onClick={handleUpdate}>
              Update Expense
            </button> */}
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
