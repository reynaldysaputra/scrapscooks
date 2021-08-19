import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ForgetPasswordPage from './screens/forget-password';
import Home from './screens/home';
import SignInPage from './screens/sign-in';
import SignUpPage from './screens/sign-up';

function Routes(){
  return(
    <>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-in' component={SignInPage} />
        <Route path='/sign-up' component={SignUpPage} />
        <Route path='/forget-password' component={ForgetPasswordPage} />
      </Switch>
    </>
  )
}

export default Routes;