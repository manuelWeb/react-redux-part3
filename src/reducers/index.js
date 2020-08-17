import { combineReducers } from 'redux';
import ReducerCountries from './reducer_countries';

const rootReducer = combineReducers({
  countryReducer: ReducerCountries
});

export default rootReducer;
