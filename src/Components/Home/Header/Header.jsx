import React from 'react';
import TopBar from '../TopBar/TopBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import BuisnessInfo from '../Buisnessinfo/BuisnessInfo';
import bgImage from '../../../assets/bg.png';
import Services from '../Services/Services';


const Header = () => {
    return (
        <div className='header-container'>
            <TopBar></TopBar>
            <HeaderMain></HeaderMain>
            <BuisnessInfo></BuisnessInfo>
            <Services></Services>
            
            
            
        </div>
    );
};

export default Header;