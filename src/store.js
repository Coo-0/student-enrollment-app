import { createStore } from 'redux';
import studentReducer from './reducers/studentReducer'; // Make sure to provide the correct path to your studentReducer

const store = createStore(studentReducer);

export default store;
