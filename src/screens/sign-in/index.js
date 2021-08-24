import React from 'react';
import DocumentTitle from 'react-document-title';
import ContainerAuth from '../../components/container-auth';
import { ReactComponent as SignInSvg } from '../../assets/sign-in.svg';
import { ReactComponent as GoogleSvg } from '../../assets/google.svg';
import InputAuth from '../../components/input-auth';
import ButtonAuth from '../../components/button-auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../config/redux/login/loginActions';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

function SignInPage(){
  const [state, setState] = useState({email: '', password: ''});
  const {loadingWithGoogle} = useSelector(state => state.login); 
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInput = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const typeLogin= e.currentTarget.dataset.type;
    const {email, password}= state;
    const response = await dispatch(userLogin({typeLogin, email, password})).catch(err => err);
    if(response.user) {
      history.push('/');
      Swal.fire({
        text: 'You have successfully logged in',
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
    <DocumentTitle title='Sign In'>
      <ContainerAuth>
        <section className='w-[100%] h-auto py-5 lg:h-full bg-blue-600 flex items-center justify-center'>
          <div className='space-y-5 lg:space-y-10 mt-[10vh] lg:mt-0'>
            <SignInSvg className='w-[60%] xl:w-[70%] h-[auto] mx-auto' />
            <h2 className='text-center text-4xl font-bold font-poppins text-white'>ScraapCooks</h2>
          </div>
        </section>
        <section className='w-[100%] px-5 py-10 lg:p-0 xl:h-full bg-white flex justify-center items-center'>
          <div className='w-full lg:w-[90%] h-full xl:h-[80%] p-5 xl:px-5 xl:py-0'>
            <h2 className='text-xl font-semibold tracking-wide'>Hello! Welcome back.</h2>
            <p className='mt-3 font-light text-base'>Sign in with your data that you entered during Your registration.</p>
            <form data-type='with-email' onSubmit={handleLogin}>
              <InputAuth label='Email address' id='email' type='text' placeholder='Exampl@email.com' onChange={handleInput} />
              <InputAuth label='Password' id='password' type='password' placeholder='Enter password' onChange={handleInput} />
              <ButtonAuth name='Start Now!' />
            </form>

            <div className='w-full flex items-center space-x-3 mt-3'>
              <hr className='flex-1 text-gray-400' />
              <p>OR</p>
              <hr className='flex-1 text-gray-400' />
            </div>

            <div 
              className={`w-full p-3 flex justify-center items-center space-x-4 shadow-md cursor-pointer ${loadingWithGoogle ? ' bg-gray-200 pointer-events-none' : 'cursor-pointer'}`} 
              data-type='with-google' 
              onClick={(e) => handleLogin(e)}
            >
              <GoogleSvg/>
              <button>Sign with google</button>
            </div>
          </div>
        </section>
      </ContainerAuth>
    </DocumentTitle>
  )
}

export default SignInPage;