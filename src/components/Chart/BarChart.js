import React from 'react';
import {
  useGetUserExpensesQuery,
  useGetLoginUserInfoQuery,
} from '../../features/user/statusSlice';
import { Bar } from 'react-chartjs-2';
const BarChart = (props) => {
  const { data = [] } = useGetUserExpensesQuery();
  console.log(data);

  const { data: userdata } = useGetLoginUserInfoQuery();

  const filterIt = userdata?.logged_in
    ? data.filter((item) => item.user_id === userdata.user.id)
    : [];

  console.log(filterIt);

  const filterItByUserId = filterIt.filter((vaso) => {
    return (
      new Date(vaso.date).toLocaleString('en-US', { year: 'numeric' }) ===
      props.filterYear
    );
  });

  console.log(filterItByUserId);

  const expensesPerMoth = () => {
    let expenses = {};

    filterItByUserId.forEach((item) => {
      const formatMonth = new Date(item.date).toLocaleString('en-US', {
        month: 'long',
      });

      expenses[formatMonth]
        ? (expenses[formatMonth] += item.amount)
        : (expenses[formatMonth] = item.amount);
    });
    return expenses;
  };

  console.log(expensesPerMoth());

  const renderValues = () => {
    const barMonths = Object.keys(expensesPerMoth());
    const valuesMonths = Object.values(expensesPerMoth());
    return (
      <Bar
        data={{
          labels: barMonths,
          datasets: [
            {
              label: 'Total Expenses Per Month',
              data: valuesMonths,
              backgroundColor: [
                'yellow',
                'blue',
                'green',
                'brown',
                'orange',
                'red',
              ],
              maxBarThickness: 150,
            },
          ],
        }}
      />
    );
  };

  return <div>{renderValues()}</div>;
};

export default BarChart;
