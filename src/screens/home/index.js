import React from 'react';
import { useEffect } from 'react';
import DocumentTitle from 'react-document-title';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { userLogout } from '../../config/redux/login/loginActions';
import { getUserList } from '../../config/redux/user/userActions';
import CreateUserPage from '../create-user';
import DetailUserPage from '../detail-user';
import EditUserPage from '../edit-user';
import TableUserPage from '../table-user';

function Home(){
  let { path } = useRouteMatch();
  const {user} = useSelector(state => state.login);
  const {userMention, userLoading} = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserList('http://localhost:3001/user'));
  }, [userMention])

  return(
    <DocumentTitle title='Home'>
      <>
        <nav className='w-full py-4 px-5 bg-blue-600 flex justify-end'>
          <p className='text-white cursor-pointer mb-0' onClick={() => dispatch(userLogout())}>Logout</p>
        </nav>
        <div className='w-full bg-gray-300 antialiased'>
          <div className='w-full px-4 py-5 lg:p-0 lg:py-10 lg:w-[80%] h-full mx-auto'>
            <h2 className='text-3xl lg:text-4xl font-semibold'>Scraap Books</h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laudantium quasi vel molestias. Voluptate alias harum illum adipisci vitae excepturi.</p>
            <hr className='mt-4 text-gray-400' />
            <p className='mt-4'>Welcome <span>{user.email}</span></p>
          </div>
        </div>
        
          <Switch>
            <Route path='/' exact>
              <TableUserPage />
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
    </DocumentTitle>
  )
}

export default Home;