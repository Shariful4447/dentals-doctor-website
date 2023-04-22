import React from 'react';
import chair from '../../../assets/chair.png';
import Button from 'react-bootstrap/Button';
import classes from '../../Home/Header/Header.module.css'
import './AppointmentHeader.css'
import { Row } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const AppointmentHeader = ({handleChange}) => {
    
    return (
        <main>
            
            <div className='bgChair'>
                <div className ="container-fluid" style={{display:'flex'}}>
                    <div className="row">
                        <div className ="col-md-6 col-sm-6 calender">
                            <h1 style={{color: '#3A4256', marginTop:'40px' }}>Appointment : </h1>
                                <Calendar onChange={handleChange} 
                                value={new Date() } />
                            
                        </div>
                        <div className ="col-md-6 col-sm-6 main-image">
                        
                                <img style={{height:'335px', width:'600px', marginTop:'40px', marginRight:'0px'}} src={chair} alt="" />
                            
                        </div>
                    </div>
                </div>  
            </div>
               
                
        </main>
    );
};

export default AppointmentHeader;