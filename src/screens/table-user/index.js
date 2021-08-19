import React from 'react';
import Table from '../../components/table';

function TableUserPage({products}){
  return(
    <div className='mt-8 w-full px-4 lg:w-[80%] mx-auto mb-5'>
      <Table products={products} />        
    </div>
  )
}

export default TableUserPage;