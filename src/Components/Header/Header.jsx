import React from 'react';
import TopBar from '../TopBar/TopBar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css';

const Header = () => {
    return (
        <div class='header-container'>
            <TopBar></TopBar>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;