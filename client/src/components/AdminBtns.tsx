import React from 'react'
import VacationI from '../interface/vacationI'
import DeleteBtn from './DeleteBtn'
import EditBtn from '../pages/EditBtn'
import FollowCount from './FollowCount'


const AdminBtns = (props:VacationI) => {
  return (
    <div className='row'>
        <FollowCount follow={props.follow}/>
        <EditBtn {...props}/>
        <DeleteBtn destination={props.destination} vacId={props.id}/>
    </div>
  )
}

export default AdminBtns