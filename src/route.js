import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './screens/home';
import SignInPage from './screens/sign-in';
import SignUpPage from './screens/sign-up';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/sign-in'>
          <SignInPage/>
        </Route>
        <Route path='/sign-up'>
          <SignUpPage/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;