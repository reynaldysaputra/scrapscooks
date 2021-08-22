import { USER_LOGIN_WITH_EMAIL, USER_LOGIN_ERROR, USER_LOGIN_WITH_GOOGLE, USER_LOGIN_LOADING_WITH_EMAIL, USER_LOGIN_LOADING_WITH_GOOGLE, USER_LOGOUT } from ".."

const initialState= {
  user: null,
  isAuth: false,
  loadingWithEmail: false,
  loadingWithGoogle: false,
  error: false
}

export function loginReducers(state= initialState, {type, data, auth, errorMessage, loadingType}){
  switch (type) {
    case USER_LOGIN_WITH_EMAIL:
      return {...state, user: data, isAuth: auth, loadingWithEmail: false}
      case USER_LOGIN_WITH_GOOGLE: 
      return {...state, user: data, isAuth: auth, loadingWithGoogle: false}
    case USER_LOGIN_LOADING_WITH_EMAIL: 
      return {...state, loadingWithEmail: loadingType}
      case USER_LOGIN_LOADING_WITH_GOOGLE: 
      return {...state, loadingWithGoogle: loadingType}
    case USER_LOGIN_ERROR: 
      return {...state, loadingWithGoogle: false, loadingWithEmail: false, error: errorMessage, isAuth: false, user: null}
    case USER_LOGOUT: 
    return initialState
    default: return state
  }
}