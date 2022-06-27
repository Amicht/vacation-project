import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SocketCtxt } from "../App";
import VacationI from "../interface/vacationI";
import Header from "../components/Header";
import VacationCard from "../components/VacationCard";
import { getVacations } from "../services/api";
import { useDispatch } from "react-redux";
import {loginReducer} from '../reducers/user'
import {setVacationsReducer} from '../reducers/vacation'
import { useSelector } from "react-redux";


const Vacations = () => {
    const dispatch = useDispatch();
    const vacations:VacationI[] = useSelector((state:any) => state.vacations.value);
    const mySocket = useContext(SocketCtxt);
    const navigate = useNavigate();

    useEffect(()=> {
      if(mySocket.socket){ mySocket.socket.close()};
      getVacations().then(data => {
        dispatch(loginReducer(data.user));
        mySocket.connect(data.user, (vacs:VacationI[]) => dispatch(setVacationsReducer(vacs)))
      }).catch(() => navigate('/login'));
      
    }, [navigate,mySocket, dispatch]);
 
  return (
    <Container>
      <Header />
      <div className="text-center">
          <h2>Vacations List</h2>
          <div className="row">
              {vacations.map((v:VacationI,idx: number) => <VacationCard key={idx} {...v}/>)}
          </div>
      </div>
    </Container>
  )
};

export default Vacations