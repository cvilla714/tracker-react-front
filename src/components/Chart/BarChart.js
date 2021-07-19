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

  const totalFilterExpenses = filterItByUserId.map((gastos) => gastos.amount);
  console.log(totalFilterExpenses);

  // const result = data
  //   ? data.reduce((acc, total) => {
  //       return { ...acc, [months]: (acc[total.amount] || 0) + 1 };
  //     }, {})
  //   : [];

  // console.log(result);

  return (
    <div>
      <Bar
        data={{
          labels: months,
          datasets: [
            {
              label: 'Total Expenses Per Month',
              data: totalFilterExpenses,
              backgroundColor: 'white',
            },
          ],
        }}
      />
    </div>
  );
};

export default BarChart;
