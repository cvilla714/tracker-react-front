import { render, screen } from '@testing-library/react';
import ExpensesFilter from '../components/Expenses/ExpensesFiter';

describe('Expenses Filter Component', () => {
  test('renders Filter By Year', () => {
    render(<ExpensesFilter />);

    const filter = screen.getByText('Filter by year');
    expect(filter).toBeInTheDocument();
  });
});
