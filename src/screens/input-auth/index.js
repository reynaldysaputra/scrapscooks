import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function InputAuth(props){
  const [activePassword, setActivePassword] = useState(false);

  return (
    <div className='w-full font-poppins mt-6'>
      <div className='flex justify-between'>
        <label htmlFor={props.id} className='font-medium text-sm'>{props.label}</label>
        {props.type == 'password' && !props.noForgotPassword ? <Link to='forgot-password' className='text-sm text-blue-600'>Forgot Password</Link> : null}
      </div>
      <div className='w-full shadow-md p-5 mt-2 flex items-center justify-between'>
        <input 
          type={activePassword ? 'text' : props.type}
          className='w-full outline-none border-none placeholder-gray-400 text-xs pr-3' 
          placeholder={props.placeholder}
          id={props.id}
        />

        {props.type == 'password' && (
          <div onClick={() => setActivePassword(!activePassword)}>
            {activePassword ? 
              (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 text-center cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current text-gray-400 text-center cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                  <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                </svg>
              )
            }
          </div>
        )}
      </div>
    </div>
  )
}

export default InputAuth;