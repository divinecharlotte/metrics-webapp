const FETCH_COINS = 'FETCH_COINS';
const currencies = [];

const CoinsReducer = (state = currencies, action) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload;
    default:
      return state;
  }
};

export default CoinsReducer;
