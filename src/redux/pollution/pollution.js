import getInitialPollution, { refactorData } from '../../services/getInitialPollution';

// Initial State
const initialState = {
  countries: [],
  filtered: [],
  selectStatus: 'All',
};

// Actions
export const INIT_POLLUTION = 'air_pollution/pollution/INIT_POLLUTION';
export const FILTER_POLLUTION = 'air_pollution/pollution/FILTER_POLLUTION';

// Action Creators
export const addInitialPollution = () => async (dispatch) => {
  const pollution = await getInitialPollution();
  const pollutionData = await refactorData(pollution);
  dispatch({
    type: INIT_POLLUTION,
    payload: pollutionData,
  });
};

export const sendFilter = (option) => ({
  type: FILTER_POLLUTION,
  payload: option,
});

export const filterState = (state, option) => {
  let filterStore;
  if (option !== 'All') {
    filterStore = state.countries.filter((country) => country.air === option);
  } else {
    filterStore = state.countries;
  }
  return filterStore;
};

// Reducer
const pollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_POLLUTION:
      return { ...state, countries: action.payload, filtered: action.payload };

    case FILTER_POLLUTION:
      return {
        ...state,
        filtered: filterState(state, action.payload),
        selectStatus: action.payload,
      };
    default:
      return state;
  }
};

export default pollutionReducer;
