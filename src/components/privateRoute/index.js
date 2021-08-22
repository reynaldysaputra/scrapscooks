import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import { userLoginIfAvailable, userLoginLoadingWithEmail, userLoginLoadingWithGoogle } from '../../config/redux/login/loginActions';
import firebase from '../../config/firebase';

export function PrivateRoute({component: Component, ...props}){
  const {isAuth} = useSelector(state => state.login);
  const {loadingWithEmail, loadingWithGoogle} = useSelector(state => state.login);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginLoadingWithGoogle(true));
    dispatch(userLoginLoadingWithEmail(true));
  }, [])

  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      dispatch(userLoginIfAvailable(res));
      dispatch(userLoginLoadingWithEmail(false));
      dispatch(userLoginLoadingWithGoogle(false));
    })
  }, [])

  if(loadingWithEmail || loadingWithGoogle) return <h2>Loading...</h2>;
  else {
    return <Route
      {...props}
      render= {(props) => {
          return isAuth ? <Component {...props} /> : <Redirect to='/sign-in' />
        }
      }
    />
  }

}