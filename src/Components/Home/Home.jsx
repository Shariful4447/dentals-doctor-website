import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import FeaturedService from './FeaturedService/FeaturedService';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import Doctors from './Doctors/Doctors'
import Blogs from './Blogs/Blogs';

const Home = () => {
    return (
        <div>
          <Header></Header>  
          <Services></Services>
          <FeaturedService></FeaturedService>
          <MakeAppointment></MakeAppointment>
          <Testimonials></Testimonials>
          <Doctors></Doctors>
          <Blogs></Blogs>
        </div>
    );
};

export default Home;