import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Headline from '../../components/home/Headline';

const setRender = () => {
  const component = render(<Headline />);
  return component;
};

describe('Test Country component', () => {
  // Arrange
  // Act
  let component;
  beforeEach(() => {
    component = setRender();
  });

  // Assert
  test('Should render without errors', () => {
    const { getByTestId } = component;
    expect(getByTestId('headlineSection')).toBeInTheDocument();
  });

  test('Should render a title element', () => {
    const { getByTestId } = component;
    expect(getByTestId('headlineTitle')).toBeInTheDocument();
  });

  test('Should render a title value', () => {
    const { getByText } = component;
    expect(getByText('Latin America')).toBeInTheDocument();
  });

  test('Should render a image', () => {
    const { getByRole } = component;
    expect(getByRole('img', { name: 'Latin America map' })).toBeInTheDocument();
  });
});
