const FETCH_DETAILS = 'FETCH_DETAILS';
const details = [];

const DetailsReducer = (state = details, action) => {
  switch (action.type) {
    case FETCH_DETAILS:
      return action.payload;
    default:
      return state;
  }
};

export default DetailsReducer;
