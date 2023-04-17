import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import FeaturedService from './FeaturedService/FeaturedService';
import MakeAppointment from './MakeAppointment/MakeAppointment';

const Home = () => {
    return (
        <div>
          <Header></Header>  
          <Services></Services>
          <FeaturedService></FeaturedService>
          <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;