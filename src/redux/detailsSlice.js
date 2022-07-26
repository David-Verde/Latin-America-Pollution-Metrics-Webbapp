import dayjs from 'dayjs';

const GET_COVID_DETAILS = 'covid_details/detailsslice/GET_COVID_DETAILS';
const GET_COVID_DETAILS_SUCCESS = 'covid_details/detailsslice/GET_COVID_DETAILS_SUCCESS';
const GET_COVID_DETAILS_ERR = 'covid_details/detailsslice/GET_COVID_DETAILS_ERR';

const today = dayjs().subtract(2, 'day').format('YYYY-MM-DD');

const detailsURL = `https://api.covid19tracking.narrativa.com/api/${today}/country`;

const getDetails = (country) => async (dispatch) => {
  dispatch({ type: GET_COVID_DETAILS });
  const response = await fetch(`${detailsURL}${country}`);
  const details = await response.json();
  return dispatch({ type: GET_COVID_DETAILS_SUCCESS, details });
};

export {
  getDetails as default,
  GET_COVID_DETAILS,
  GET_COVID_DETAILS_SUCCESS,
  GET_COVID_DETAILS_ERR,
};
