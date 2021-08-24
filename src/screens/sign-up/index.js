import React from 'react';
import DocumentTitle from 'react-document-title';
import ContainerAuth from '../../components/container-auth';
import { ReactComponent as SignUpSvg } from '../../assets/sign-up.svg';
import InputAuth from '../../components/input-auth';
import ButtonAuth from '../../components/button-auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../config/redux/register/registerActions';

function SignUpPage(){
  const [state, setState] = useState({email: '', password: '', confirmPassword: ''});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(register(state));
  }

  return(
    <DocumentTitle title='Sign In'>
      <ContainerAuth>
        <section className='w-[100%] h-auto py-5 lg:h-full bg-blue-600 flex items-center justify-center'>
          <div className='space-y-5 lg:space-y-10 mt-[10vh] lg:mt-0'>
            <SignUpSvg className='w-[60%] xl:w-[70%] h-[auto] mx-auto' />
            <h2 className='text-center text-4xl font-bold font-poppins text-white'>ScraapCooks</h2>
          </div>
        </section>
        <section className='w-[100%] px-5 py-10 lg:p-0 xl:h-full bg-white flex justify-center items-center'>
          <div className='w-full lg:w-[90%] h-full xl:h-[80%] p-5 xl:px-5 xl:py-0'>
            <h2 className='text-xl font-semibold tracking-wide'>Sign Up</h2>
            <p className='mt-3 font-light text-base'>Enter your data here.</p>
            <form onSubmit={handleRegister}>
              <InputAuth label='Email' id='email' type='text' placeholder='Exampl@email.com' onChange={handleInput} />
              <InputAuth label='Password' id='password' type='password' placeholder='Enter password' noForgotPassword onChange={handleInput} />
              <InputAuth label='Confirm Password' id='confirmPassword' type='password' placeholder='Enter password' noForgotPassword onChange={handleInput} />
              <ButtonAuth name='Start Now!' />
            </form>
          </div>
        </section>
      </ContainerAuth>
    </DocumentTitle>
  )
}

export default SignUpPage;