import { DateRangeOutlined } from '@mui/icons-material';
import React from 'react';

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center pt-5' style={{color:'#1cc7c1'}}>Available Appointment {date.toDateString()}</h2>
        </section>
    );
};

export default BookAppointment;