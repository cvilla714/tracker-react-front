import { GET_EXPENSES, SET_LOADING, LOGS_ERROR, ADD_EXPENSES, DELETE_EXPENSES } from './types';


export const getExpense = () => async (dispatch) => {
    try {
      setLoading();
  
      const res = await fetch({'http://localhost:3001/expenses',credentials: 'include'})
      const data = await res.json();
  
      dispatch({
        type: GET_EXPENSES,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        // payload: error.response.data,
        payload: error.response.statusText,
      });
    }
  };

  export const addExpense = (expense) => async (dispatch) => {
    try {
      setLoading();
  
      const res = await fetch('http://localhost:3001/expenses', {
        method: 'POST',
        body: JSON.stringify(expense),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
  
      dispatch({
        type: ADD_EXPENSE,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: LOGS_ERROR,
        // payload: error.response.data,
        payload: error.response.statusText,
      });
    }
  };