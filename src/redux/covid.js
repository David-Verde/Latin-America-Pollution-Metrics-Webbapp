import dayjs from 'dayjs';

import { GET_COVID, GET_COVID_SUCCESS, GET_COVID_ERR } from './covidSlice';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

// Initial state

const initialState = {
  covidGlobal: [],
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COVID:
      return { ...state, pending: true };
    case GET_COVID_SUCCESS:
    {
      const covidGlobal = [];
      Object.entries(action.covid.dates[today].countries).forEach((key) => {
        covidGlobal.push({
          name: key,
          confirmed: key[1].today_confirmed,
          deaths: key[1].today_deaths,
        });
      });
      return { ...state, pending: false, covidGlobal };
    }
    case GET_COVID_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;
