import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Login from './components/login';
import RoomDisplay from './components/rooms';
import Ratings from './components/ratings';
import SignUp from './components/signUp';
import ReserveRoom from './components/bookin';
import Success from './components/success';

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
