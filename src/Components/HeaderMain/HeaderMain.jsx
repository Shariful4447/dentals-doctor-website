import React from 'react';
import chair from '../../assets/chair.png'

const HeaderMain = () => {
    return (
        <main className='row'>
            <div className="col-md-4 offset-md-1">
                <h1>Your New Journey</h1>
                <h1>Begin From Here...</h1>
                <h4>“Medicine aims to prevent disease plus prolong life; the idea of medicine is to eliminate the need of a physician.” – William Mayo.</h4>

            </div>
            <div className="col-md-6">
                <img src={chair} className='img-fluid' alt="" />
            </div>

        </main>
    );
};

export default HeaderMain;