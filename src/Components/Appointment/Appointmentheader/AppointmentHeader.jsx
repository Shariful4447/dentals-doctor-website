import React from 'react';
import chair from '../../../assets/chair.png';

const AppointmentHeader = () => {
    return (
        <main style={{height: '600px',padding:'10px'}} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1 style={{color: '#3A4256' }}>Your New Journey <br/> Starts Here...</h1>
                <p>“Medicine aims to prevent disease plus prolong life,Medicine is to eliminate the need of a physician.”William Mayo.</p>
                <Button variant="success">Take Appointment</Button>

            </div>
            <div className="col-md-6">
                <img style={{height:'400px', width:'600px'}} src={chair} alt=""/>
            </div>

        </main>
    );
};

export default AppointmentHeader;