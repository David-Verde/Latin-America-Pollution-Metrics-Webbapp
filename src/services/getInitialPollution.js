import axios from 'axios';

const baseURL = 'https://api.openweathermap.org/data/2.5/air_pollution?';

export const latinCountriesLatLong = [
  {
    country: 'Peru',
    latitude: '-9.18',
    longitude: '-75.01',
  },
  {
    country: 'Argentina',
    latitude: '-38.42',
    longitude: '-63.62',
  },
  {
    country: 'Bolivia',
    latitude: '-16.29',
    longitude: '-63.59',
  },
  {
    country: 'Brasil',
    latitude: '-14.24',
    longitude: '-51.93',
  },
  {
    country: 'Chile',
    latitude: '-35.68',
    longitude: '-71.54',
  },
  {
    country: 'Colombia',
    latitude: '4.57',
    longitude: '-74.30',
  },
  {
    country: 'Ecuador',
    latitude: '-1.83',
    longitude: '-78.18',
  },
  {
    country: 'Paraguay',
    latitude: '-23.44',
    longitude: '-58.44',
  },
  {
    country: 'Uruguay',
    latitude: '-32.52',
    longitude: '-55.77',
  },
  {
    country: 'Venezuela',
    latitude: '6.42',
    longitude: '-66.59',
  },
];

export const refactorData = (data) => {
  const pollution = latinCountriesLatLong.map((country, index) => ({
    name: `${country.country}`,
    air: `${data[index].list[0].main.aqi}`,
    components: data[index].list[0].components,
    id: `${index}`,
  }));
  return pollution;
};

const getInitialPollution = async () => {
  const results = latinCountriesLatLong.map(async (country) => {
    const response = await axios.get(`${baseURL}lat=${country.latitude}&lon=${country.longitude}&appid=4138d7a8121dd6bb5e48faf547cf65cd`);
    return response.data;
  });

  const finalData = await Promise.all(results);
  return finalData;
};

export default getInitialPollution;
