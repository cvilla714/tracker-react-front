import { render, screen } from '@testing-library/react';
import ExpensesFiter from '../components/Expenses/ExpensesFiter';

describe('Expenses Filter Component', () => {
  test('renders Filter By Year', () => {
    render(<ExpensesFiter />);

    const filter = screen.getByText('Filter by year');
    expect(filter).toBeInTheDocument();
  });
});
