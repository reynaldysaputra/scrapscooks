import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ButtonBack from '../../components/button-back';
import { getUserDetail } from '../../config/redux/user/userActions';

function DetailUserPage() {
  const dispatch = useDispatch();
  const params = useParams();
  const {userDetail} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getUserDetail(`http://localhost:3001/user/${params.id}`));
  }, [])

  return (
    userDetail != undefined ? 
    <div className='w-full lg:w-[80%] mx-auto mt-3 px-3'>
      <ButtonBack />
      <div className='w-[100%] lg:w-full m-0 overflow-scroll lg:p-0'>
        <table className="table-fixed border-collapse shadow-lg mt-6">
          <thead>
            <tr>
              <th className="bg-blue-100 border text-left px-8 py-4">ID</th>
              <th className="bg-blue-100 border text-left px-8 py-4 w-[70%]">User Name</th>
              <th className="bg-blue-100 border text-left px-8 py-4 w-[30%]">Gender</th>
              <th className="bg-blue-100 border text-left px-8 py-4">Age</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-blue-800'>
              <td className='border px-8 py-4'>{userDetail.id}</td>
              <td className='border px-8 py-4 w-max' style={{wordBreak: 'break-word'}}>{userDetail.userName}</td>
              <td className='border px-8 py-4'>{userDetail.gender}</td>
              <td className='border px-8 py-4'>{userDetail.age}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div> : null
  )
}

export default DetailUserPage;