import React, { Fragment } from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Header from './Components/Home/Header/Header';
import FooterBottom from './Components/Shared/FooterBotom/FooterBotom';
import TopBar from './Components/Shared/TopBar/TopBar';




const App = () => {
  return (
    <Fragment>
        <TopBar></TopBar>
        <main>
          <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/appointment' element={<Appointment/>}/>
              </Routes> 
          </Router> 
        </main> 
        <FooterBottom></FooterBottom>
    </Fragment>
  );
};

export default App;
