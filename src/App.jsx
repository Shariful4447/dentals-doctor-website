import React from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment/Appointment';




const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route exact path='/appointment' element={<Appointment/>}/>
        </Routes> 
    </Router>    
  );
};

export default App;
