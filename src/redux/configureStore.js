import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CoinsReducer from './CoinList/CoinList';
import DetailsReducer from './CoinDetails/CoinDetails';

const rootReducer = combineReducers({
  CoinsReducer,
  DetailsReducer,
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
