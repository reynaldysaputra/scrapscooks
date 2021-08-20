import { USER_REGISTER, USER_REGISTER_ERROR, USER_REGISTER_LOADING } from ".."
import firebase from '../../firebase';
import Swal from 'sweetalert2';

export const userRegisterLoading = (payload) => {
  return {
    type: USER_REGISTER_LOADING,
    loading: payload
  }
}

export const userRegisterError = (payload) => {
  return {
    type: USER_REGISTER_ERROR,
    errorMessage: payload
  }
}

export const userRegister = (payload) => {
  return {
    type: USER_REGISTER,
    data: payload
  }
}

export const register = ({email, password, confirmPassword}) => {
  return (dispatch) => {
    dispatch(userRegisterLoading(true));

    if(password !== confirmPassword) {
      Swal.fire({
        text: 'Your passwords are not the same!',
        icon: 'warning',
        confirmButtonColor: '#3B82F6'
      });
    }else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
          dispatch(userRegisterLoading(false));
          Swal.fire({
            text: 'You have registered successfully!',
            icon: 'success',
            confirmButtonColor: '#3B82F6'
          });    
          dispatch(userRegister(res));
        })
        .catch(err => {
          dispatch(userRegisterLoading(false));
          Swal.fire({
            text: err.message,
            icon: 'error',
            confirmButtonColor: '#3B82F6'
          });
          dispatch(userRegisterError(err.message));
        })
    }

  }
}