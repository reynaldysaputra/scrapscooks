import React from 'react';
import { useHistory } from 'react-router-dom';

function Navbar(){
  const history = useHistory();
  
  return(
    <nav className='absolute top-0 w-auto lg:w-[90%]  left-[5%] flex lg:justify-end mt-5 space-x-5 lg:mt-3'>
      <button className='button-navbar' onClick={() => history.push('/sign-in')}>Sign In</button>
      <button className='button-navbar' onClick={() => history.push('/sign-up')}>Register</button>
    </nav>
  )
}

export default Navbar;