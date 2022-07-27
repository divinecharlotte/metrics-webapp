import React from 'react';
import './Chart.css';
import PropTypes from 'prop-types';
import chart from '../assets/images/chart.png';

const Chart = ({ title1, title2, count }) => (
  <div className="chart-cont">
    <div className="chart-img"><img src={chart} alt="chart" /></div>
    <div className="chart-text">
      <h1>
        {title1}
        <br />
        {title2}
      </h1>
      <p>{count}</p>
    </div>
  </div>
);

Chart.propTypes = {
  title1: PropTypes.string,
  title2: PropTypes.string,
  count: PropTypes.string.isRequired,
};
Chart.defaultProps = {
  title1: null,
  title2: null,
};
export default Chart;
