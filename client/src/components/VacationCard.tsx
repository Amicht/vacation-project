import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';
import VacationI from '../interface/vacationI';
import AdminBtns from './AdminBtns';
import FollowBtn from './FollowBtn';


const VacationCard = (props: VacationI) => {
  const userRole:number = useSelector((state:any) => state.user.value.role);

  return (
    <Card className="col-md-4">
            {userRole === 1? 
            <FollowBtn follow={props.follow} vacId={props.id}/>:
            <AdminBtns {...props}/>}
      <Card.Img src={'/images/'+props.picture}/> 
        <Card.Title className='text-success fw-bold'>{props.destination}</Card.Title>
      <Card.Body>
        <Card.Text className='text-start'>
            {props.description} <br/><br/>
        </Card.Text>
        <div className='mb-3'>
            price: <span className='text-success fw-bolder'>{props.price + '$'}</span>
        </div>
            from: {props.from_date.split('T')[0]}<br/> to: {props.to_date.split('T')[0]} <br/><br/>
      </Card.Body>
    </Card>
  );
}

export default VacationCard