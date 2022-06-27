import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Vacations from './pages/Vacations';
import AddVacation from './pages/AddVacation';
import Reports from './pages/Reports';
import mySocketIoService from './services/SocketIoService';
import SocketIoService from './services/SocketIoService';


export const SocketCtxt = createContext<typeof SocketIoService>(mySocketIoService);

function App() {
  return (
    <SocketCtxt.Provider value={mySocketIoService}>
        <div className='container'>
        <Routes>
          <Route path='/' element={<Vacations />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='/addVacation' element={<AddVacation />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
        </div>
    </SocketCtxt.Provider>
  );
}

export default App;
