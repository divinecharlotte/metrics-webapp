import React from 'react';
import PropTypes from 'prop-types';

const Coin = ({
  name, symbol, id, price, handleDetails,
}) => (
  <button
    type="button"
    onClick={() => handleDetails(id)}
    className="coin-card"
  >
    <svg width="25" height="25" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 48C16 30.36 30.36 16 48 16C65.64 16 80 30.36 80 48C80 65.64 65.64 80 48 80C30.36 80 16 65.64 16 48ZM8 48C8 70.08 25.92 88 48 88C70.08 88 88 70.08 88 48C88 25.92 70.08 8 48 8C25.92 8 8 25.92 8 48ZM48 44H32V52H48V64L64 48L48 32V44Z" fill="white" />
    </svg>

    <h2 className="coin-name">
      {name}
    </h2>
    <h2 className="coin-symbol">
      {symbol}
    </h2>
    <h4>
      $
      {price}
    </h4>
  </button>
);

Coin.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  handleDetails: PropTypes.func.isRequired,
};

export default Coin;
