import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Chart from '../components/Chart';
import Coin from '../components/Coin';
import Header from '../components/Header';
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
      <Header path="/" />
      <Chart title1="Crypto" title2="Currency" count={`${coins.length} Coins`} />
      <div>
        <h3 className="coins-title">Coins By Name, Symbol, Price</h3>
        <div className="coin-card-cont">
          {coins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              id={coin.id}
              price={coin.priceUsd}
              handleDetails={handleDetails}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
