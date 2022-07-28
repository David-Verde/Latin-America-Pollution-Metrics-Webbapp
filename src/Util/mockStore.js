import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';
import pollutionReducer, { INIT_POLLUTION } from '../redux/pollution/pollution';

const RootReducer = combineReducers({
  pollution: pollutionReducer,
});

const testStore = () => {
  const store = createStore(RootReducer, applyMiddleware(thunk));
  return store;
};

export default testStore;

export const fetchPollution = () => async (dispatch) => {
  await axios.get('https://api.openweathermap.org/data/2.5/air_pollution?lat=-9.18&lon=-75.01&appid=4138d7a8121dd6bb5e48faf547cf65cd')
    .then((res) => {
      const { data } = res;
      dispatch({
        type: INIT_POLLUTION,
        payload: [{
          name: 'Peru',
          air: data.list[0].main.aqi,
          components: data.list[0].components,
          id: '0',
        }],
      });
    });
};
