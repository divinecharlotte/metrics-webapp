import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Coin from '../components/Coin';
import { FetchCoinsFunc } from '../redux/CoinList/CoinList';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coins = useSelector((state) => state.CoinsReducer);
  useEffect(() => {
    dispatch(FetchCoinsFunc());
  }, []);

  const handleDetails = (id) => navigate(`/details/${id}`);
  return (
    <div data-testid="intro-page" className="data-cont">
      <div>
        <h3 className="coins-title">Coins By Name, Symbol, Price</h3>
        <div className="coin-card-cont">
          {coins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              id={coin.id}
              price={coin.price}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
