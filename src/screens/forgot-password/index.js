import React from 'react';
import ContainerAuth from '../../components/container-auth';
import { ReactComponent as ForgotPasswordSvg } from '../../assets/forgot-password.svg';
import InputAuth from '../../components/input-auth';
import { useState } from 'react';
import ButtonAuth from '../../components/button-auth';
import { useDispatch } from 'react-redux';
import { forgotPassword } from '../../config/redux/login/loginActions';
import Swal from 'sweetalert2';

function ForgotPasswordPage(){
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const response = await dispatch(forgotPassword(email)).catch(err => err);

    console.log(response);

    if(!response.message) {
      Swal.fire({
        text: 'Successfully sent, Check email to change password.',
        icon: 'success',
        confirmButtonColor: '#3B82F6'
      });
    }else {
      Swal.fire({
        text: response.message,
        icon: 'error',
        confirmButtonColor: '#3B82F6'
      });
    }
  }

  return(
    <ContainerAuth>
      {console.log(email)}
      <section className='w-[100%] h-auto py-5 lg:h-full bg-blue-600 flex items-center justify-center'>
        <div className='space-y-5 lg:space-y-10 mt-[10vh] lg:mt-0'>
          <ForgotPasswordSvg className='w-[60%] xl:w-[70%] h-[auto] mx-auto' />
          <h2 className='text-center text-4xl font-bold font-poppins text-white'>ScraapCooks</h2>
        </div>
      </section>
      <section className='w-[100%] px-5 py-10 lg:p-0 xl:h-full bg-white flex justify-center items-center'>
        <div className='w-full lg:w-[90%] h-full xl:h-[80%] p-5 xl:px-5 xl:py-0'>
          <h2 className='text-xl font-semibold tracking-wide'>Forgot Password?</h2>
          <p className='mt-3 font-light text-base'>Enter the registered email to change the forgotten password.</p>
          <form onSubmit={handleResetPassword}>
            <InputAuth label='Email address' id='email' type='text' placeholder='Exampl@email.com' onChange={(e) => setEmail(e.target.value)} />
            <ButtonAuth name='Reset Password' />
          </form>
        </div>
    </section>
  </ContainerAuth>
  )
}

export default ForgotPasswordPage;