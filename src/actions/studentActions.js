// studentActions.js
import { UPDATE_NAME, UPDATE_AGE } from './actionTypes';

export const updateName = (name) => {
  return {
    type: UPDATE_NAME,
    payload: name,
  };
};

export const updateAge = (age) => {
  return {
    type: UPDATE_AGE,
    payload: age,
  };
};
