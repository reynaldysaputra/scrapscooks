import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect, Route} from 'react-router-dom';
import { userLoginIfAvailable} from '../../config/redux/login/loginActions';
import firebase from '../../config/firebase';
import { useState } from 'react';

export function PrivateRoute({component: Component, ...props}){
  const {user} = useSelector(state => state.login);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((res) => {
      dispatch(userLoginIfAvailable(res));
      setLoading(false);
    })
  }, [])

  if(loading) return <h2>Loading...</h2>;

  return <Route
    {...props}
    render= {(props) => {
        return user !== null ? <Component {...props} /> : <Redirect to='/sign-in' />
      }
    }
  />

}