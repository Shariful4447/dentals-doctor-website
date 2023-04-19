import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import classes from './Header.module.css';
import BuisnessInfo from '../Buisnessinfo/BuisnessInfo';
import bgImage from '../../../assets/bg.png';
import TopBar from '../../Shared/TopBar/TopBar';
import { Col, Row } from 'react-bootstrap';



const Header = () => {
    return (
        <div className='header-container'>
            <TopBar></TopBar>
            

            <div className={classes.bgChair}>
                <HeaderMain></HeaderMain>
                <BuisnessInfo></BuisnessInfo>
                <div className={classes.bg}>

                </div>
            </div>
            
            
            
            
            
            
        </div>
    );
};

export default Header;