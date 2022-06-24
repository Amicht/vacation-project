import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import VacationI from '../interface/vacationI';

const AdminVacationCard = (props: VacationI) => {
    
  return (
    <Card style={{ width: '18rem' }} className="col-sm-3 mx-auto">
      <Card.Img src="/images/no-image.jpg" />
      <Card.Body>
        <Card.Title>{props.destination}</Card.Title>
        <Card.Text>
            {props.description} <br/>
            price: {props.price + '$'}
        </Card.Text>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default AdminVacationCard;