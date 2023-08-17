import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import RoomDisplay from './components/Rooms';
import Ratings from './components/Ratings';
import SignUp from './components/SignUp';
import ReserveRoom from './components/Bookin';
import Success from './components/Success';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/rooms" element={<RoomDisplay />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/reserve" element={<ReserveRoom />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
