import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../Ui/Card';
import ExpenseForm from '../NewExpense/ExpenseForm';
import { Button, Modal, Form } from 'react-bootstrap';
import useForm from '../Hooks/useForm';
import {
  useUpdateExpensesMutation,
  useGetUserExpensesQuery,
} from '../../features/user/statusSlice';

const ExpenseItem = ({ date, title, amount, id }) => {
  const { form } = useForm({
    title: '',
    amount: '',
    date: '',
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    setShow(true);
    console.log(data.find((item) => item.id === +e.target.id));

    // let updateItem = data.find((item) => item.id === +e.target.id);
  };
  // console.log(handleShow());

  const [updateExpenses, { isLoading: isUpdating }] =
    useUpdateExpensesMutation();
  const { data } = useGetUserExpensesQuery();

  const handleUpdate = (e) => {
    // console.log(updateItem);
    // updateExpenses(change);
    // console.log(e.target);
    // handleShow();
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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter Expense"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                min="0.01"
                step="0.01"
                name="amount"
                placeholder="Enter Amount"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                min="2019-0-01"
                max="2022-12-31"
                name="date"
                placeholder="Select Date"
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
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
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
