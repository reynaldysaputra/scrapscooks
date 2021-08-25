import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DocumentTitle from 'react-document-title';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import ButtonBack from '../../components/button-back';
import InputUser from '../../components/input-user';
import { getUserDetail, updateUser } from '../../config/redux/user/userActions';

function EditUserPage(){
  const params = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState(undefined);
  
  const handleInput = (e) => {
    setState(state => ({
      ...state,
      [e.target.name]: e.target.value
    }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const response = await dispatch(updateUser(`http://localhost:3001/user/${params.id}`, state));

    if(response.data) {
      Swal.fire({
        text: 'Successfully update user data',
        icon: 'success',
        confirmButtonColor: '#3B82F6'
      });
    }
  }

  useEffect(() => {
    dispatch(getUserDetail(`http://localhost:3001/user/${params.id}`))
      .then(res => {
        setState(res.data);
      })
  }, [])

  return(
    <DocumentTitle title='Edit User'>
      {state != undefined ? 
      <div className='w-full lg:w-[80%] mx-auto mt-3 px-3'>
        <ButtonBack/>
        <h3 className='mt-5 font-bold text-2xl'>Edit User</h3>
        <form className='mt-5 w-full md:w-[35%]' onSubmit={handleUpdate}>
          <InputUser name='userName' type='text' placeholder='Username' defaultValue={state.userName} onChange={handleInput} />
          <InputUser name='gender'type='text' placeholder='Gender' defaultValue={state.gender} onChange={handleInput} />
          <InputUser name='age' type='text' placeholder='Age' defaultValue={state.age} onChange={handleInput}  />
          <button className='mt-4 py-2 px-3 bg-gray-600 text-white rounded-md'>Submit</button>
        </form>
      </div> : null}
    </DocumentTitle>
  )
}

export default EditUserPage;