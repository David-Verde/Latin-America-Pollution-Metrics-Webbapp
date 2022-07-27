import pollutionReducer, { INIT_POLLUTION } from '../../redux/pollution/pollution';

describe('Test pollutionReducer', () => {
  // Arrange
  // Act
  let state;
  let action;
  beforeEach(() => {
    state = undefined;
    action = {
      type: INIT_POLLUTION,
      payload: [
        {
          name: 'Peru',
          air: '3',
          components: { co: 320.44, no: 0.01, no2: 0.05 },
          id: '1',
        },
        {
          name: 'Argentina',
          air: '2',
          components: { co: 289, no: 0.02, no2: 0.03 },
          id: '2',
        },
        {
          name: 'Brasil',
          air: '4',
          components: { co: 293.73, no: 0, no2: 0.25 },
          id: '3',
        },
      ],
    };
  });
  // Assert
  test('Should return default state', () => {
    const newState = pollutionReducer(state, {});
    expect(newState).toEqual({ countries: [], filtered: [], selectStatus: 'All' });
  });

  test('Should return a state if receiving a type', () => {
    const newState = pollutionReducer(state, action);
    expect(newState).toEqual({ countries: [...action.payload], filtered: [...action.payload], selectStatus: 'All' });
  });
});
