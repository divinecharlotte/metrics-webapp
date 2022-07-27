import { render, screen } from '@testing-library/react';
import Coin from '../components/Coin';
import '@testing-library/jest-dom/extend-expect';

const data = {
  name: 'name',
  symbol: 'symbol',
  id: '1',
  price: '1000',
};
describe('coin component', () => {
  it('elements', () => {
    render(<Coin
      name={data.name}
      symbol={data.symbol}
      id={data.id}
      price={data.price}
      handleDetails={(res) => res}
    />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('name')).toBeInTheDocument();
    expect(screen.getByText('symbol')).toBeInTheDocument();
    expect(screen.getByText(/1000/i)).toBeInTheDocument();
  });
});
