import React from 'react';
import { useSelector } from 'react-redux';
import Table from '../../components/table';

function TableUserPage(){
  const {userLoading} = useSelector(state => state.users);

  return(
    <div className='mt-8 w-full px-4 lg:w-[80%] mx-auto mb-5 text-center'>
      {userLoading ? <h3>Loading data...</h3> : <Table/>}
    </div>
  )
}

export default TableUserPage;