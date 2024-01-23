import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login.js';
import Registro from './components/Registro.js';
import Perfil from './components/Perfil.js';

import Navbar from './components/Navbar.js';

function App() {
  return (
    <div className="App">
      <div className='app-container'>
        <Router>
          <div className='main'>
            <Navbar />
          </div>
          <div>
            <Routes>
              <Route path='/login' Component={Login} />
              <Route path='/registro' Component={Registro} />
              <Route path='/perfil' Component={Perfil} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;