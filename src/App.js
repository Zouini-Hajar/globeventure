import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/auth' element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
