import { AppReducer } from './AppContext';
import { createStore } from 'redux';

const store = createStore(AppReducer);

export default store;