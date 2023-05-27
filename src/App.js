import React from 'react';
import LoginPage from './components/LoginPage'
import { BrowserRouter as Router
  , Routes
  , Route } from "react-router-dom"
import Home from './components/Home';
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/'  element={<LoginPage/>} ></Route>
        <Route path='/home' element={<Home/>}></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
