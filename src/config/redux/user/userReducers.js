import { CLEAR_USER_DETAIL, CLEAR_USER_MENTION, GET_USER_DETAIL, GET_USER_LIST, USER_ERROR, USER_LOADING, USER_MENTION } from "..";

const initialState= {
  userList: undefined,
  userDetail: undefined,
  userLoading: false,
  userMention: false,
  userError: false
}

export function userReducer(state=initialState, action){
  switch(action.type){
    case GET_USER_LIST: 
      return {
        ...state,
        userList: action.data
      }
    case GET_USER_DETAIL: 
      return {
        ...state,
        userDetail: action.data
      }
    case CLEAR_USER_DETAIL: 
      return {
        ...state, 
        userDetail: undefined
      }    
    case USER_MENTION:  
      return {
        ...state,
        userMention: action.data
      }
    case CLEAR_USER_MENTION:  
      return {
        ...state,
        userMention: false
      }
    case USER_LOADING: 
      return {
        ...state,
        userLoading: action.loading
      }
    case USER_ERROR:
      return {
        ...state,
        userError: action.error
      }
    default: return state
  }
}