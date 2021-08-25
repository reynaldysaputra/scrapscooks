import {combineReducers} from 'redux';
import { loginReducers } from './login/loginReducers';
import RegisterReducer from './register/registerReducers';
import { userReducer } from './user/userReducers';

export const allReducer = combineReducers({
  register: RegisterReducer,
  login: loginReducers,
  users: userReducer
})