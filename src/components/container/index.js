import React from 'react';
import Navbar from '../navbar';

function Container({children}){
  return(
    <div className='w-full h-screen flex'>
      <div className='w-full h-full lg:w-[85%] lg:h-[80%] m-auto flex flex-col lg:flex-row items-center shadow-full relative'>
        <Navbar/>

        {children}
      </div>
    </div>
  )
}

export default Container;