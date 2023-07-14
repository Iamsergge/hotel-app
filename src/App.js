import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import RoomDisplay from './components/rooms';
import SignUp from './components/signUp';




function App() {
  return (
    <div>
     <RoomDisplay/>
     <Router>
      <Routes>
      <Route path="/login" element={<Home/>}></Route>
      <Route path="/login" element={<Home/>}></Route>
      <Route path="/home" element={<RoomDisplay/>}></Route>
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
