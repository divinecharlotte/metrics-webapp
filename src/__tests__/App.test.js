import {
  render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';

describe('app routes', () => {
  it('app elements', () => {
    render(<Provider store={store}><App /></Provider>);
    expect(screen.getByTestId('intro-page')).toBeInTheDocument();
  });
});
