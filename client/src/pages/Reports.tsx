import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Chart from '../components/Chart'
import Header from "../components/Header";
import UserI from "../interface/UserI";
import { useSelector } from "react-redux";
import VacationI from "../interface/vacationI";

const Reports = () => {
  const user:UserI = useSelector((state:any) => state.user.value);
  const vacations:VacationI[] = useSelector((state:any) => state.vacations.value);

  const navigate = useNavigate();
  
  // prevent unauthorized access (for user or unregistered hacker)
  useEffect(()=> {if(user.role < 2) navigate('/')},[navigate,user]);

  return (
    <>
        <Header />
        <Chart vacations={vacations}/>
    </>

  )
}

export default Reports