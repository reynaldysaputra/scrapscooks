import React from 'react';
import Navbar from '../navbar';

function ContainerAuth({children}){
  return(
    <div className='w-full h-screen flex'>
      <div className='w-full h-full lg:w-[85%] lg:h-[80%] m-auto flex flex-col xl:flex-row items-center shadow-full relative'>
        <Navbar/>

        {children}
      </div>
    </div>
  )
}

export default ContainerAuth;