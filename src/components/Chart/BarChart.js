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

  // const filterItByMonth = filterIt
  //   .filter((vaso) => {
  //     return (
  //       new Date(vaso.date).toLocaleString('en-US', { year: 'numeric' }) ===
  //       props.filterYear
  //     );
  //   })
  //   .map((spoon) =>
  //     new Date(spoon.date).toLocaleString('en-US', { month: 'long' }),
  //   );

  // console.log(filterItByMonth);

  // const filterItByMonth = filterIt.filter((vaso) => {
  //   return (
  //     new Date(vaso.date).toLocaleString('en-US', { year: 'numeric' }) ===
  //     props.filterYear
  //   );
  // });

  // console.log(filterItByMonth);
  const expensesPerMoth = () => {
    console.log(filterItByUserId);
    let expenses = {};

    filterItByUserId.map((item) => {
      const formatMonth = new Date(item.date).toLocaleString('en-US', {
        month: 'long',
      });
      // console.log(formatMonth);
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

  // const meses = filterIt.map((masa) => {
  //   return new Date(masa.date).toLocaleString('en-US', { month: 'long' });
  // });
  // console.log(meses);

  // console.log(
  //   data
  //     ? data.map((month) =>
  //         new Date(month.date).toLocaleString('en-US', { month: 'long' }),
  //       )
  //     : [],
  // );

  //   console.log(
  //     data.map((month) =>
  //       new Date(month.date).toLocaleString('en-US', { month: 'long' }),
  //     ),
  //   );
  const months = data
    ? data.map((month) =>
        new Date(month.date).toLocaleString('en-US', { month: 'long' }),
      )
    : [];
  // console.log(months);

  // const totalExpenses = data ? data.map((expense) => expense.amount) : [];
  // console.log(totalExpenses);

  // const totalFilterExpenses = filterItByUserId.map((gastos) => gastos.amount);
  // console.log(totalFilterExpenses);

  // const result = data
  //   ? data.reduce((acc, total) => {
  //       return { ...acc, [months]: (acc[total.amount] || 0) + 1 };
  //     }, {})
  //   : [];

  // console.log(result);

  return (
    <div>
      {/* <Bar
        data={{
          // labels: filterItByMonth,
          datasets: [
            {
              label: 'Total Expenses Per Month',
              // data: totalFilterExpenses,
              backgroundColor: 'white',
            },
          ],
        }}
      /> */}
      {renderValues()}
    </div>
  );
};

export default BarChart;
