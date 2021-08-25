import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ButtonActions from '../button-actions';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { SearchBar } = Search;

const columns = [
  {
    dataField: 'id',
    text: 'ID',
    headerStyle: {
      width: '10%',
      textAlign: 'center'
    },
    sort : true
  }, {
    dataField: 'userName',
    text: 'User Name',
    sort : true
  }, {
    dataField: 'gender',
    text: 'Gender',
    sort : true
  },
  {
    dataField: 'actions',
    text: 'Actions',
    formatter: (rowContent, row) => {
      return (
        <div className='flex space-x-3'>
          <ButtonActions detail name='Detail' link={`/detail/${row.id}`} />
          <ButtonActions edit name='Edit' link={`/edit/${row.id}`} />
          <ButtonActions remove name='Remove' id={row.id} />
        </div>
      )
    }
  }
];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

function Table(){
  const history = useHistory();
  const {userList} = useSelector(state => state.users);

  return(
    <ToolkitProvider
      bootstrap4
      keyField='id' 
      data={userList === undefined ? [{}] : userList} 
      columns={ columns } 
      defaultSorted={defaultSorted}
      search
    >
      {props => (
        <div>
          <div className='flex justify-between mb-4 flex-col md:flex-row space-y-5 lg:space-y-0 items-start'>
            <button className='py-2 px-4 bg-gray-600 h-full text-white rounded-md flex' onClick={() => history.push('/create-user')}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              Create User
            </button>
            <SearchBar placeholder='Search...' srText={''} { ...props.searchProps } />
          </div>
          <hr />
          <div className='antialiased'>
            <BootstrapTable
              id='tables' 
              pagination={ paginationFactory() }
              { ...props.baseProps }
            />
          </div>
        </div>
        )
      }
    </ToolkitProvider>
  )
}

export default Table;