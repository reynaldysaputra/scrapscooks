import axios from 'axios';
import { CLEAR_USER_DETAIL, CLEAR_USER_MENTION, GET_USER_DETAIL, GET_USER_LIST, USER_ERROR, USER_LOADING, USER_MENTION } from '..';

export const userError = (err) => {
  return {
    type: USER_ERROR,
    error: err
  }
}

export const userLoading = (load) => {
  return {
    type: USER_LOADING,
    loading: load
  }
}

export const getUser = (user) => {
  return {
    type: GET_USER_LIST,
    data: user
  }
}

export const getUserDetails = (user) => {
  return {
    type: GET_USER_DETAIL,
    data: user
  }
}

export const clearUserDetail = () => {
  return {
    type: CLEAR_USER_DETAIL
  }
}

export const userMention = (user) => {
  return {
    type: USER_MENTION,
    data: user
  }
}

export const clearUserMention = () => {
  return {
    type: CLEAR_USER_MENTION
  }
}

export const getUserList = (api) => {
  return (dispatch) => {
    dispatch(userLoading(true));
    axios.get(api)
      .then(response => {
        dispatch(userLoading(false));
        dispatch(getUser(response.data));
      }).catch(err => {
        dispatch(userLoading(false));
        dispatch(userError(err));
      })
  }
}

export const getUserDetail = (api) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      dispatch(userLoading(true));
      axios.get(api)
        .then(response => {
          dispatch(userLoading(false));
          dispatch(getUserDetails(response.data));
          resolve(response);
        }).catch(err => {
          dispatch(userLoading(false));
          dispatch(userError(err));
          reject(err);
        })
    })
  }
}

export const addUser = (api, data) => {
  return (dispatch) => {
    return new Promise(resolve => {
      axios.post(api, data)
        .then(response => {
          dispatch(userMention(response));
          resolve(response);
        }).catch(err => {
          dispatch(userError(err));
        })
    })
  }
}

export const updateUser = (api, data) => {
  return (dispatch) => {
    return new Promise(resolve => {
      axios.put(api, data)
        .then(response => {
          dispatch(userMention(response));
          resolve(response);
        }).catch(err => {
          dispatch(userError(err));
        })
    })
  }
}

export const deleteUser = (api) => {
  return (dispatch) => {
    dispatch(userLoading(true));
    axios.delete(api)
      .then(response => {
        dispatch(userLoading(false));
        dispatch(userMention(response));
        console.log(response);
      }).catch(err => {
        dispatch(userLoading(false));
        dispatch(userError(err));
      })
  }
}