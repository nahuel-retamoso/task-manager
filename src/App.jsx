import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Agenda from './components/Agenda/Agenda';
import Bienestar from './components/Bienestar/Bienestar';
import Calendario from './components/Calendario/Calendario';

function App() {
  return (
    <div className='main-container'>
      <h1>Task manager</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/agenda' element={<Agenda/>} />
        <Route path='/bienestar' element={<Bienestar/>} />
        <Route path='/calendario' element={<Calendario/>} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
