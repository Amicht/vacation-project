import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserCtxt } from "../App";
import Chart from '../components/Chart'
import Header from "../components/Header";

const Reports = () => {
    const { user } = useContext(UserCtxt);
    const navigate = useNavigate();

    useEffect(()=> {if(!user.role || user.role < 2) navigate('/')},[navigate,user]);

  return (
    <>
        <Header />
        <div>Reports</div>
        <Chart />
    </>

  )
}

export default Reports