import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SocketCtxt, UserCtxt, VacsCtxt } from "../App";
import Chart from '../components/Chart'
import Header from "../components/Header";
import { getVacations } from "../logic/api";

const Reports = () => {
  const { setVacs } = useContext(VacsCtxt);
  const {setUser } = useContext(UserCtxt);
 const navigate = useNavigate();
 const mySocket = useContext(SocketCtxt);

 useEffect(()=> {
   if(mySocket.socket){return};
    getVacations().then(data => {
      setUser(data.user);
      mySocket.connect(data.user, setVacs)
    }).catch(() => navigate('/login'));
  }, [navigate,mySocket, setUser, setVacs]);

  return (
    <>
        <Header />
        <Chart />
    </>

  )
}

export default Reports