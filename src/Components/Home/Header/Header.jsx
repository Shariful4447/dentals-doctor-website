import React from 'react';
import TopBar from '../TopBar/TopBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';
import BuisnessInfo from '../Buisnessinfo/BuisnessInfo';
import bgImage from '../../../assets/bg.png';


const Header = () => {
    return (
        <div className='header-container'>
            <TopBar></TopBar>
            <HeaderMain></HeaderMain>
            <BuisnessInfo></BuisnessInfo>
            
            
            
        </div>
    );
};

export default Header;