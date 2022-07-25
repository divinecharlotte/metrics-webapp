import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchDetailsFunc } from '../redux/CoinDetails/CoinDetails';
import './Details.css';

const Details = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const details = useSelector((state) => state.DetailsReducer);
  useEffect(() => {
    dispatch(FetchDetailsFunc(coinId));
  }, []);
  return (
    <div className="data-cont">
      <h3 className="coins-title">Coin Description</h3>
      <ul className="details-cont">
        <li className="details-light">
          <span>Name :</span>
          <span>{details.name}</span>
        </li>
        <li className="details-dark">
          <span>Symbol :</span>
          <span>{details.symbol}</span>
        </li>
        <li className="details-light">
          <span>Rank :</span>
          <span>{details.rank}</span>
        </li>
        <li className="details-dark">
          <span>Supply :</span>
          <span>{details.supply}</span>
        </li>
        <li className="details-light">
          <span>Market Capital(USD) :</span>
          <span>{details.marketCapUsd}</span>
        </li>
        <li className="details-dark">
          <span>Volume(USD) 24Hrs :</span>
          <span>{details.volumeUsd24Hr}</span>
        </li>
        <li className="details-light">
          <span>Price(USD) :</span>
          <span>{details.priceUsd}</span>
        </li>
        <li className="details-dark">
          <span>Change Percent(24Hr) :</span>
          <span>{details.changePercent24Hr}</span>
        </li>
        <li className="details-light">
          <span>VWAP(24Hr) :</span>
          <span>{details.vwap24Hr}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
