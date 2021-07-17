import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './Expenseitem.css';
import Card from '../Ui/Card';
import { Button, Modal, Form } from 'react-bootstrap';
import useForm from '../Hooks/useForm';
import {
  useUpdateExpensesMutation,
  useGetUserExpensesQuery,
  useDeleteExpenseMutation,
} from '../../features/user/statusSlice';

const ExpenseItem = ({ date, title, amount, id }) => {
  const { form, handleChange, clearForm } = useForm({
    title: '',
    amount: '',
    date: '',
  });
  const [updateExpenses] = useUpdateExpensesMutation();
  const { data } = useGetUserExpensesQuery();

  const [deleteExpense] = useDeleteExpenseMutation();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = (e) => {
    setShow(true);
    let expenseinfo = data.find((item) => item.id === +e.target.id);
    console.log(expenseinfo);

    expenseinfo = {
      title: form.title,
      amount: form.amount,
      date: new Date(form.date).toLocaleDateString(),
      id,
    };

    return expenseinfo;
  };

  const handleSubmit = (e) => {
    const updatingTheExpense = handleShow(e);
    updateExpenses(updatingTheExpense);
    clearForm();
  };

  const handleDelete = (e) => {
    const deleteItem = data.find((item) => item.id === +e.target.id);
    console.log(deleteItem);
    // console.log(deleteItem.id);
    const deleteItemId = deleteItem.id;
    console.log(deleteItemId);
    // const deleteItem = handleShow(e);
    deleteExpense(deleteItemId);
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
                value={form.title}
                onChange={handleChange}
                placeholder="Enter Expense"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                min="0.01"
                step="0.01"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Enter Amount"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicPasswordConfirmation"
            >
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                min="2019-0-01"
                max="2022-12-31"
                name="date"
                value={form.date}
                onChange={handleChange}
                placeholder="Select Date"
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleSubmit}>
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
            <Button id={id} variant="primary" onClick={handleDelete}>
              Delete the Expense
            </Button>
          </div>
        </Card>
      </li>
    </div>
  );
};

export default ExpenseItem;
