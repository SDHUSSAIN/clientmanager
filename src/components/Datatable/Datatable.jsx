import React from 'react'
import { Link } from "react-router-dom"
import "../Datatable/datatable.scss"
import { DataGrid} from '@mui/x-data-grid';
import { userRows,userColumns } from '../../datatablesource';

const Datatable = () => {

  const actionColumn = [{field:"action", headerName:"Action", width:200,renderCell:()=>{
    return (
      <div className='cell__action'>
        <div className="view__button">
          <Link to="/users/test" style={{textDecoration:"none"}}>
            View
          </Link>
        </div>
        <div className='delete__button'>
          Delete
        </div>
      </div>
    )
  }}]

  return (
    <div className='datatable'>
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable