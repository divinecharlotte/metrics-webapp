import DetailsReducer, { FetchDetailsSuccess } from '../redux/CoinDetails/CoinDetails';

jest.mock('axios');
describe('action creator of coin details', () => {
  test('should return payload & data', () => {
    const data = {
      id: 'bitcoin',
      rank: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      priceUsd: '21038.4480487916075722',
    };

    expect(FetchDetailsSuccess(data)).toEqual({
      type: 'FETCH_DETAILS',
      payload: data,
    });
  });
});

describe('reducer of coin details', () => {
  test('should return the initial state', () => {
    expect(DetailsReducer([], {})).toEqual([]);
  });
  test('should return the data', () => {
    const action = {
      type: 'FETCH_DETAILS',
      payload: {
        id: 'bitcoin',
        rank: '1',
        symbol: 'BTC',
        name: 'Bitcoin',
        priceUsd: '21038.4480487916075722',
      },
    };
    expect(DetailsReducer([], action)).toEqual({
      changePercent24Hr: '0.00000000',
      id: 'bitcoin',
      marketCapUsd: '0.0000',
      name: 'Bitcoin',
      priceUsd: '21038.44804879',
      rank: '1',
      supply: '0.0000',
      symbol: 'BTC',
      volumeUsd24Hr: '0.0000',
      vwap24Hr: '0.00000000',
    });
  });
});
