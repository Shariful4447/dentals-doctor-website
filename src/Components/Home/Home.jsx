import React from 'react';
import Header from './Header/Header';
import Services from './Services/Services';
import FeaturedService from './FeaturedService/FeaturedService';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonials from './Testimonials/Testimonials';
import Doctors from './Doctors/Doctors'
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';
import FooterBottom from './FooterBotom/FooterBotom';


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
          <Footer></Footer>
          <FooterBottom></FooterBottom>
          
        </div>
    );
};

export default Home;