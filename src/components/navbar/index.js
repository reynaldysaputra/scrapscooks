import React from 'react';

function Navbar(){
  return(
    <nav className='absolute top-0 w-full lg:w-[90%]  left-[5%] flex lg:justify-end mt-5 space-x-5 lg:mt-3'>
      <button className='px-4 py-2 rounded-md text-blue-600 shadow-md lg:shadow-none lg:text-white font-poppins bg-white lg:bg-blue-600 text-sm'>Sign In</button>
      <button className='px-4 py-2 rounded-md text-blue-600 shadow-md lg:shadow-none lg:text-white font-poppins bg-white lg:bg-blue-600 text-sm'>Register</button>
    </nav>
  )
}

export default Navbar;