import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavigationBar from '../components/Navbar';
import { Provider } from 'react-redux';
import store from '../app/store';

describe('<Navbar />', () => {
  let component;

  beforeEach(() => {
    component = render(
      <Provider store={store}>
        <MemoryRouter>
          <NavigationBar />
        </MemoryRouter>
      </Provider>,
    );
  });

  test('It should render', () => {
    component.getByText('Expenses Tracker');
  });
});
