import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
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

  const [search, setSearch] = useSearchParams();

  const handleDetails = (id) => navigate(`/details/${id}`);
  return (
    <div data-testid="intro-page" className="data-cont">
      <Header path="/" />
      <Chart title1="Crypto" title2="Currency" count={`${coins.length} Coins`} />

      <div>

        <input
          className="coins-title"
          type="text"
          value={search.get('filter') || ''}
          placeholder="Search by Crypto name  eg : BNB"
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) {
              setSearch({ filter });
            } else {
              setSearch({});
            }
          }}
        />
        <div className="coin-card-cont">
          {coins
            .filter((coin) => {
              const filter = search.get('filter');
              if (!filter) return true;
              const name = coin.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((coin) => (
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
