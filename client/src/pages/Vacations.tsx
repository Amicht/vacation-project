import { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserCtxt, VacsCtxt } from "../App";
import VacationI from "../interface/vacationI";
import { getVacations } from "../logic/api";
import Header from "../components/Header";
import VacationCard from "../components/VacationCard";

const Vacations = () => {
    const {vacs , setVacs } = useContext(VacsCtxt);
    const { setUser, user } = useContext(UserCtxt);
    const navigate = useNavigate();

    useEffect(()=> {
        getVacations().then(data => {
            setUser(data.user);
            setVacs(data.vacations)
        }).catch(() => navigate('/login'));        
    }, [setVacs ,navigate, setUser]);
 
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