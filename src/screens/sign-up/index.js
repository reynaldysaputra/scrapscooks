import React from 'react';
import DocumentTitle from 'react-document-title';
import ContainerAuth from '../../components/container-auth';
import { ReactComponent as SignUpSvg } from '../../assets/sign-up.svg';
import InputAuth from '../input-auth';
import ButtonAuth from '../button-auth';

function SignUpPage(){
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
            <form>
              <InputAuth label='Email' id='email' type='text' placeholder='Exampl@email.com' />
              <InputAuth label='Password' id='password' type='password' placeholder='Enter password' noForgotPassword />
              <InputAuth label='Confirm Password' id='password' type='password' placeholder='Enter password' noForgotPassword />
              <ButtonAuth name='Start Now!' />
            </form>
          </div>
        </section>
      </ContainerAuth>
    </DocumentTitle>
  )
}

export default SignUpPage;