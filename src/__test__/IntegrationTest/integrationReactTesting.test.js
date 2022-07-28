import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../../components/App';
import '@testing-library/jest-dom/extend-expect';
import { refactorData } from '../../services/getInitialPollution';

import store from '../../redux/configureStore';

jest.mock('../../services/getInitialPollution');

describe('Test Integration with React Testing Library', () => {
  // Arrange
  // Act
  const posts = [{
    name: 'Peru',
    air: '1',
    components: {
      co: 327.11,
      no: 0,
      no2: 0.15,
      o3: 0.93,
      so2: 0.02,
      pm2_5: 2.93,
      pm10: 2.99,
      nh3: 0.07,
    },
    id: '0',
  },
  {
    name: 'Argentina',
    air: '3',
    components: {
      co: 327.11,
      no: 0,
      no2: 0.15,
      o3: 0.93,
      so2: 0.02,
      pm2_5: 2.93,
      pm10: 2.99,
      nh3: 0.07,
    },
    id: '1',
  },
  ];

  // Assert
  test('Should render a list of country with title and air quality values', async () => {
    refactorData.mockResolvedValueOnce(posts);
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>,
    );
    await waitFor(() => {
      expect(screen.getAllByTestId('countryTitle').length).toBe(2);
      expect(screen.getAllByTestId('countryAirQuality').length).toBe(2);
    });

    posts.forEach((post) => expect(screen.getByText(post.name)).toBeInTheDocument());
  });
});
