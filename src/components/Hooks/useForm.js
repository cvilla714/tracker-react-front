import { useState } from 'react';

const InitialState = {
  title: '',
  amount: '',
  date: '',
  email: '',
  password: '',
  password_confirmation: '',
};
const useForm = () => {
  const [form, setForm] = useState(InitialState);

  const handleChange = ({ target }) => {
    setForm((prevState) => {
      return { ...prevState, [target.name]: target.value };
    });
  };

  const clearForm = () => {
    setForm(InitialState);
  };
  // console.log(form);
  return { form, handleChange, clearForm };
};

export default useForm;
