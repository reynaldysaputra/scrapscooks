import {combineReducers} from 'redux';
import { loginReducers } from './login/loginReducers';
import RegisterReducer from './register/registerReducers';

export const allReducer = combineReducers({
  register: RegisterReducer,
  login: loginReducers
})