import React from 'react';

function ButtonAuth(props){
  return <button className='w-full text-center bg-blue-600 p-3 rounded-sm text-white mt-7'>
    {props.name}
    </button>
}

export default ButtonAuth;