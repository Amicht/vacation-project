import React from 'react'
import DeleteBtn from './DeleteBtn'
import EditBtn from './EditBtn'
import FollowCount from './FollowCount'

interface FollowCountI{
    follow:number
}
const AdminBtns = (props:FollowCountI) => {
  return (
    <div className='row'>
        <FollowCount follow={props.follow}/>
        <EditBtn />
        <DeleteBtn />
    </div>
  )
}

export default AdminBtns