import { createContext, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Vacations from './pages/Vacations';
import VacationI from './interface/vacationI';
import UserI from './interface/UserI';
import AddVacation from './pages/AddVacation';
import Reports from './pages/Reports';

export const VacsCtxt = createContext<any>([]);
export const UserCtxt = createContext<any>({});

function App() {
  const [ vacs, setVacs] = useState<VacationI[]>([]);
  const [ user,setUser] = useState<UserI | {}>({});
  
  return (
    <VacsCtxt.Provider value={{vacs, setVacs}}>
    <UserCtxt.Provider value={{user, setUser}}>
      <div className='container'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Vacations />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/addVacation' element={<AddVacation />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </BrowserRouter>
      </div>
    </UserCtxt.Provider>
    </VacsCtxt.Provider>
  );
}

export default App;
