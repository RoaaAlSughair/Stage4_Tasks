import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  );
}

export default App;
