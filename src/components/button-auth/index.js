import React from 'react';
import { useSelector } from 'react-redux';

function ButtonAuth(props){
  const {loading} = useSelector(state => state.register);
  const {loadingWithEmail} = useSelector(state => state.login);

  return <button 
    className={
      `w-full text-center bg-blue-600 p-3 rounded-sm text-white mt-7 
      ${loading || loadingWithEmail ? ' bg-blue-200 pointer-events-none' : 'cursor-pointer'}
      `
    }
  >
    {console.log(loading)}
    {props.name}
    </button>
}

export default ButtonAuth;