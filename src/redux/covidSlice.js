import dayjs from 'dayjs';

const GET_COVID = 'covid/covidslice/GET_COVID';
const GET_COVID_SUCCESS = 'covid/covidslice/GET_COVID_SUCCESS';
const GET_COVID_ERR = 'covid/covidslice/GET_COVID_ERR';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

const covidURL = `https://api.covid19tracking.narrativa.com/api/${today}`;

const getCovid = () => async (dispatch) => {
  dispatch({ type: GET_COVID });
  const response = await fetch(covidURL);
  const covid = await response.json();
  return dispatch({ type: GET_COVID_SUCCESS, covid });
};

export {
  getCovid as default,
  GET_COVID,
  GET_COVID_SUCCESS,
  GET_COVID_ERR,
};
