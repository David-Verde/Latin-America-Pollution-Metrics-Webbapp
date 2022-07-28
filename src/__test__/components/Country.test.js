import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Country from '../../components/home/Country';

const setRender = (props) => {
  const component = render(<Router><Country name={props.name} air={props.air} /></Router>);
  return component;
};

describe('Test Country component', () => {
  // Arrange
  // Act
  let component;
  beforeEach(() => {
    const props = {
      name: 'Peru',
      air: '5',
    };
    component = setRender(props);
  });

  // Assert
  test('Should render without errors', () => {
    const { getByTestId } = component;
    expect(getByTestId('countryCategory')).toBeInTheDocument();
  });

  test('Should render a title element', () => {
    const { getByTestId } = component;
    expect(getByTestId('countryTitle')).toBeInTheDocument();
  });

  test('Should render a title value', () => {
    const { getByText } = component;
    expect(getByText('Peru')).toBeInTheDocument();
  });

  test('Should render a air quality element', () => {
    const { getByTestId } = component;
    expect(getByTestId('countryAirQuality')).toBeInTheDocument();
  });

  test('Should render a air quality value', () => {
    const { getByText } = component;
    expect(getByText('AQI: 5')).toBeInTheDocument();
  });
});
