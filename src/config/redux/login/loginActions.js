import { USER_LOGIN_ERROR, USER_LOGIN_LOADING_WITH_EMAIL, USER_LOGIN_LOADING_WITH_GOOGLE, USER_LOGIN_WITH_EMAIL, USER_LOGIN_WITH_GOOGLE, USER_LOGOUT } from ".."
import firebase from '../../firebase';

export const userLoginIfAvailable = (props) => {
  return {
    type: props.emailVerified ? USER_LOGIN_WITH_GOOGLE : USER_LOGIN_WITH_EMAIL,
    data: props,
    auth: true
  }
}

export const userLoginWithEmail = (props) => {
  return {
    type: USER_LOGIN_WITH_EMAIL,
    data: props,
    auth: true
  }
}

export const userLoginWithGoogle= (props) => {
  return {
    type: USER_LOGIN_WITH_GOOGLE,
    data: props,
    auth: true
  }
}

export const userLoginLoadingWithEmail = (props) => {
  return {
    type: USER_LOGIN_LOADING_WITH_EMAIL,
    loadingType: props    
  }
}

export const userLoginLoadingWithGoogle = (props) => {
  return {
    type: USER_LOGIN_LOADING_WITH_GOOGLE,
    loadingType: props    
  }
}

export const userLoginError = ({error}) => {
  return {
    type: USER_LOGIN_ERROR,
    errorMessage: error
  }
}

export const userLogout = () => {
  return {
    type: USER_LOGOUT
  }
}

export const userLogin = ({typeLogin, email, password}) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      
      if(typeLogin === 'with-google') {
        dispatch(userLoginLoadingWithGoogle(true));
        const googleProvider= new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(googleProvider)
          .then(res => {          
            dispatch(userLoginWithGoogle(res));
            dispatch(userLoginLoadingWithGoogle(false));
            resolve(res);
          }).catch(err => {
            dispatch(userLoginError(err));
            reject(err);
          })
        }else {
          dispatch(userLoginLoadingWithEmail(true));
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(res => {
            dispatch(userLoginWithEmail(res));
            dispatch(userLoginLoadingWithEmail(false));
            resolve(res);
          }).catch(err => {
            dispatch(userLoginError(err));
            reject(err);
            console.log(err);
          })
      }
    })
  }
}