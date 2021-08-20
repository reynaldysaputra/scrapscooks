import { USER_REGISTER, USER_REGISTER_ERROR, USER_REGISTER_LOADING } from '..';

const initialState= {
  user: null,
  loading: false,
  error: null
}

function RegisterReducer(state=initialState, {type, data, errorMessage, loading}) {
    switch(type){
      case USER_REGISTER_LOADING: 
        return {...state, loading: loading}
      case USER_REGISTER: 
        return {...state, user: data, loading: loading}
      case USER_REGISTER_ERROR: 
        return {...state, error: errorMessage}
      default : return state
    }
}

export default RegisterReducer;