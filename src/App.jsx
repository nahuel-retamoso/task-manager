import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <h1>Task manager</h1>
      <Home />
      <Navbar />
    </div>
  )
}

export default App
