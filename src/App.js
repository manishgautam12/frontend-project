import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignupForm from './compenents/SignupForm';
import LoginForm from './compenents/LoginForm';

function App() {
  return (
   <>
    <Router>
        <Routes>
          <Route exact path="/" element={<SignupForm />}></Route>
          <Route exact path="/login" element={<LoginForm />}></Route>
        </Routes>
      </Router>
   </>
  );
}

export default App;
