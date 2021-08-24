import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute } from './components/privateRoute';
import ForgotPasswordPage from './screens/forgot-password';
import Home from './screens/home';
import SignInPage from './screens/sign-in';
import SignUpPage from './screens/sign-up';

function Routes(){
  return(
    <>
      <Switch>
        <Route path='/sign-in'>
          <SignInPage/>
        </Route>
        <Route path='/sign-up'>
          <SignUpPage/>
        </Route>
        <Route path='/forgot-password'>
          <ForgotPasswordPage/>
        </Route>
        <PrivateRoute path='/' component={Home} />
      </Switch>
    </>
  )
}

export default Routes;