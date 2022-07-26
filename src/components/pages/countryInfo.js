import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useRouteMatch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './heroarea';
import getDetails from '../../redux/detailsSlice';

const Details = ({ name }) => {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  const countryData = useSelector((state) => state.detailsReducer.countryDetails);
  const countryInfo = countryData[name];

  useEffect(async () => {
    if (!countryData.length) {
      await dispatch(getDetails(url));
    }
  }, []);

  return (
    <div className="country-container">
      <Header title="Contry details" backButtonTitle="Global" />
      <div className="country-details">
        <h2>{countryInfo?.name}</h2>
        <p>
          Source:
          {' '}
          {countryInfo?.source}
        </p>
        <p>
          Deaths until today:
          {' '}
          {countryInfo?.today_deaths}
        </p>
        <p>
          Deaths today:
          {' '}
          {countryInfo?.today_new_deaths}
        </p>
        <p>
          Confirmed cases until today:
          {' '}
          {countryInfo?.today_confirmed}
        </p>
        <p>
          Confirmed cases today:
          {' '}
          {countryInfo?.today_new_confirmed}
        </p>
        <p>
          Open cases until today:
          {' '}
          {countryInfo?.today_open_cases}
        </p>
        <p>
          Recovered cases until today:
          {' '}
          {countryInfo?.today_recovered}
        </p>
        <p>
          New open cases:
          {' '}
          {countryInfo?.today_new_open_cases}
        </p>
        <p>
          New recovered cases:
          {' '}
          {countryInfo?.today_new_recovered}
        </p>
      </div>
    </div>
  );
};

Details.propTypes = ({
  name: PropTypes.string,
}).isRequired;

export default Details;
