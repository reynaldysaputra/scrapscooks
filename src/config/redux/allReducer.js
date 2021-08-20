import {combineReducers} from 'redux';
import RegisterReducer from './register/registerReducers';

export const allReducer = combineReducers({
  register: RegisterReducer
})