import moxios from 'moxios';
import testStore, { fetchPollution } from '../../Util/mockStore';

describe('addInitialPollution action', () => {
  // Arrange
  // Act
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  // Assert
  test('Store is updated correctly', () => {
    const expectedState = [{
      name: 'Peru',
      air: 1,
      components: {},
      id: '0',
    }];

    const expectedRes = {
      coord: {
        lon: -75.01,
        lat: -9.18,
      },
      list: [
        {
          main: {
            aqi: 1,
          },
          components: {},
        },
      ],
    };

    const store = testStore();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedRes,
      });
    });

    return store.dispatch(fetchPollution())
      .then(() => {
        const newState = store.getState();
        expect(newState.pollution.countries).toEqual(expectedState);
      });
  });
});
