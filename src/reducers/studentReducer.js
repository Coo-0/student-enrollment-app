// studentReducer.js
import { UPDATE_NAME, UPDATE_AGE } from '../actions/actionTypes';
import { createSelector } from 'reselect';

// Selectors
const getName = (state) => state.name;
const getAge = (state) => state.age;

export const getNameSelector = createSelector(
  getName,
  (name) => name
);

export const getAgeSelector = createSelector(
  getAge,
  (age) => age
);

const initialState = {
  name: '',
  age: null,
  enrolled: false,
};

const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      console.log('UPDATE_NAME:', action.payload);
      return {
        ...state,
        name: action.payload,
      };
    case UPDATE_AGE:
      console.log('UPDATE_AGE:', action.payload);
      return {
        ...state,
        age: action.payload,
      };
    default:
      return state;
  }
};

export default studentReducer;
