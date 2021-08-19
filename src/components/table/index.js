import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ButtonActions from '../button-actions';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

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
    dataField: 'name',
    text: 'Product Name',
    sort : true
  }, {
    dataField: 'price',
    text: 'Product Price',
    sort : true
  },
  {
    dataField: 'actions',
    text: 'Actions',
    formatter: (rowContent, row) => {
      return (
        <div className='flex space-x-3'>
          <ButtonActions detail name='Detail' />
          <ButtonActions edit name='Edit' />
          <ButtonActions remove name='Remove' />
        </div>
      )
    }
  }
];

const defaultSorted = [{
  dataField: 'name',
  order: 'desc'
}];

function Table({products}){
  return(
    <ToolkitProvider
      bootstrap4
      keyField='id' 
      data={ products } 
      columns={ columns } 
      defaultSorted={defaultSorted}
      search
    >
      {props => (
        <div>
          <div className='flex justify-end'>
            <SearchBar placeholder='Search...' srText { ...props.searchProps } />
          </div>
          <hr />
          <BootstrapTable
            id='tables' 
            pagination={ paginationFactory() }
            { ...props.baseProps }
          />
        </div>
        )
      }
    </ToolkitProvider>
  )
}

export default Table;