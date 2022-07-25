import axios from 'axios';

const FETCH_DETAILS = 'FETCH_DETAILS';
const details = [];

export const FetchDetailsSuccess = (data) => ({ type: FETCH_DETAILS, payload: data });
export const FetchDetailsFunc = (id) => (dispatch) => {
  axios.get(`${process.env.REACT_APP_BASE_URL}/${id}`)
    .then((res) => dispatch(FetchDetailsSuccess(res.data.data))).catch((err) => err);
};

const DetailsReducer = (state = details, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return {
        ...action.payload,
        priceUsd: parseFloat(action.payload.priceUsd || 0).toFixed(8),
        supply: parseFloat(action.payload.supply || 0).toFixed(4),
        marketCapUsd: parseFloat(action.payload.marketCapUsd || 0).toFixed(4),
        volumeUsd24Hr: parseFloat(action.payload.volumeUsd24Hr || 0).toFixed(4),
        changePercent24Hr: parseFloat(action.payload.changePercent24Hr || 0).toFixed(8),
        vwap24Hr: parseFloat(action.payload.vwap24Hr || 0).toFixed(8),
      };
    default:
      return state;
  }
};

export default DetailsReducer;
