import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../../Loader/Loading';
import Country from './Country';

const MainCountry = () => {
  const countries = useSelector((state) => state.pollution.filtered);
  const isData = countries.length > 0;

  return (
    <>
      {!isData && (
        <>
          <Loading />
          <div className="font-gill text-2xl lg:text-3xl text-white text-center mt-10 px-4">
            There may not be any country with such air quality at this time.
          </div>
        </>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">
        {countries.map((country) => (
          <Country
            key={country.id}
            name={country.name}
            air={country.air}
            data-testid="row"
          />
        ))}
      </div>
    </>
  );
};

export default MainCountry;
