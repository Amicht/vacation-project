import { createContext, useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SocketCtxt, UserCtxt, VacsCtxt } from "../App";
import VacationI from "../interface/vacationI";
import Header from "../components/Header";
import VacationCard from "../components/VacationCard";
import { getVacations } from "../logic/api";


const Vacations = () => {
    const {vacs, setVacs } = useContext(VacsCtxt);
    const {setUser } = useContext(UserCtxt);
    const navigate = useNavigate();
    const mySocket = useContext(SocketCtxt);

    useEffect(()=> {
      getVacations().then(data => {
        setUser(data.user);
        setVacs(data.vacations);
        mySocket.connect(data.user, setVacs)
      }).catch(() => navigate('/login'));
    }, [navigate,mySocket, setUser, setVacs]);
 
  return (
    <Container>
      <Header />
      <div className="text-center">
          <h2>Vacations List</h2>
          <div className="row">
              {vacs.map((v:VacationI,idx: number) => <VacationCard key={idx} {...v}/>)}
          </div>
      </div>
    </Container>
  )
};

export default Vacations