import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { UserCtxt } from '../App';
import VacationI from '../interface/vacationI';
import AdminBtns from './AdminBtns';
import FollowBtn from './FollowBtn';


const VacationCard = (props: VacationI) => {
  const { user } = useContext(UserCtxt);
  
  return (
    <Card className="col-sm-3">
            {user.role === 1? <FollowBtn follow={props.follow}/>:<AdminBtns follow={props.follow}/>}
      <Card.Img src={'/images/'+props.picture}/> 
        <Card.Title className='text-success fw-bold'>{props.destination}</Card.Title>
      <Card.Body>
        <Card.Text>
            {props.description} <br/><br/>
            price: <span className='text-success fw-bolder'>{props.price + '$'}</span>
        </Card.Text>
            from: {props.from_date.split('T')[0]}<br/> to: {props.to_date.split('T')[0]} <br/><br/>
      </Card.Body>
    </Card>
  );
}

export default VacationCard