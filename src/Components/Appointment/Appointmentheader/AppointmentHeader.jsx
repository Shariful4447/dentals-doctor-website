import React from 'react';
import chair from '../../../assets/chair.png';
import Button from 'react-bootstrap/Button';
import classes from '../../Home/Header/Header.module.css'
import './AppointmentHeader.css'
import { Row } from 'react-bootstrap';


const AppointmentHeader = () => {
    return (
        <main >
            <div className={classes.bgChair}>
                <Row className='Content' >
                    <div className="col-md-8 offset-md-1">
                        <h1 style={{color: '#3A4256' }}>Appointment : </h1>
                    

                    </div>
                    <div className="col-md-4 main-image">
                        <img src={chair} alt=""/>
                    </div>
                </Row>

            </div>

        </main>
    );
};

export default AppointmentHeader;