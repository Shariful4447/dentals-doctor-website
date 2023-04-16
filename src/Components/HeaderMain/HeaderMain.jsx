import React from 'react';
import chair from '../../assets/chair.png'
import Button from 'react-bootstrap/Button';

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">
                <h1>Your New Journey</h1>
                <h1>Begin From Here...</h1>
                <h4>“Medicine aims to prevent disease plus prolong life; the idea of medicine is to eliminate the need of a physician.” – William Mayo.</h4>
                <Button variant="success">Take Appointment</Button>

            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;