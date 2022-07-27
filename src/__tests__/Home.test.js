import axios from 'axios';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';
import store from '../redux/configureStore';
import { FetchCoinsFunc } from '../redux/CoinList/CoinList';
import '@testing-library/jest-dom/extend-expect';

const TestHome = () => (
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
);
const res = {
  data: {
    data: [{
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      priceUsd: 21038.4480487916075722,
    }],
  },
};
jest.mock('axios');
axios.get.mockResolvedValue(res);
FetchCoinsFunc();
render(<TestHome />);
describe('Home page', () => {
  it('check elements & user interaction', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('BTC')).toBeInTheDocument();
    expect(screen.getByText(/21038/i)).toBeInTheDocument();
    const Button = screen.getByRole('button');
    fireEvent.click(Button);
    const url = window.location.href;
    expect(url).toBe('http://localhost/details/bitcoin');
  });
});
