import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { userLogout } from '../../config/redux/login/loginActions';
import CreateUserPage from '../create-user';
import DetailUserPage from '../detail-user';
import EditUserPage from '../edit-user';
import TableUserPage from '../table-user';

const products = [
  {
    id: 1,
    name: 'Oke',
    price: '2500'
  },
  {
    id: 2,
    name: 'Sip',
    price: '2500'
  },
  {
    id: 3,
    name: 'Mantap',
    price: '2500'
  },
  {
    id: 4,
    name: 'ajaib',
    price: '2500'
  },
  {
    id: 5,
    name: 'Wokeh',
    price: '2500'
  },
  {
    id: 6,
    name: 'lorem',
    price: '2500'
  },
  {
    id: 7,
    name: 'eeee',
    price: '2500'
  },
  {
    id: 8,
    name: 'xxxx',
    price: '2500'
  },
  {
    id: 9,
    name: 'Halo',
    price: '2500'
  },
  {
    id: 10,
    name: 'dddd',
    price: '2500'
  },
  {
    id: 11,
    name: 'aldo',
    price: '2500'
  },
  {
    id: 12,
    name: 'fery',
    price: '2500'
  },
  {
    id: 13,
    name: 'bung',
    price: '2500'
  }
]

function Home(){
  let { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  return(
    <>
      <nav className='w-full py-4 px-5 bg-blue-600 flex justify-end'>
        <p className='text-white cursor-pointer mb-0' onClick={() => dispatch(userLogout())}>Logout</p>
      </nav>
      <div className='w-full bg-gray-300 antialiased'>
        <div className='w-full px-4 py-5 lg:p-0 lg:py-10 lg:w-[80%] h-full mx-auto'>
          <h2 className='text-3xl lg:text-4xl font-semibold'>Scraap Books</h2>
          <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laudantium quasi vel molestias. Voluptate alias harum illum adipisci vitae excepturi.</p>
          <hr className='mt-4 text-gray-400' />
          <p className='mt-4'>Welcome <span>renalfrontend@gmail.com!</span></p>
        </div>
      </div>
      
      <Switch>
        <Route path='/' exact>
          <TableUserPage products={products} />
        </Route>
        <Route path={`${path}create-user`}>
          <CreateUserPage/>
        </Route>
        <Route path={`${path}edit/:id`}>
          <EditUserPage/>
        </Route>
        <Route path={`${path}detail/:id`}>
          <DetailUserPage/>
        </Route>
      </Switch>
    </>
  )
}

export default Home;