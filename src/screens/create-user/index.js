import React from 'react';
import { useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import ButtonBack from '../../components/button-back';
import InputUser from '../../components/input-user';
import { addUser } from '../../config/redux/user/userActions';

function CreateUserPage(){
  const [state, setState] = useState({userName: '', gender: '', age: ''});
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleAdd = async (e) => {
    e.preventDefault();
    const response = await dispatch(addUser('http://localhost:3001/user', state));

    if(response){
      Swal.fire({
        text: 'Successfully added user data',
        icon: 'success',
        confirmButtonColor: '#3B82F6'
      });
    }
  } 

  return(
    <DocumentTitle title='Create user'>
      <>
        <div className='w-full lg:w-[80%] mx-auto mt-3 px-3'>
          <ButtonBack/>
          <h3 className='mt-5 font-bold text-2xl'>Create User</h3>
          <form className='mt-5 w-full md:w-[35%]' onSubmit={handleAdd}>
            <InputUser name='userName' type='text' placeholder='Username' onChange={handleInput} />
            <InputUser name='gender'type='text' placeholder='Gender' onChange={handleInput} />
            <InputUser name='age' type='text' placeholder='Age' onChange={handleInput} />
            <button className='mt-4 py-2 px-3 bg-gray-600 text-white rounded-md'>Submit</button>
          </form>
        </div>
      </>
    </DocumentTitle>
  )
}

export default CreateUserPage;