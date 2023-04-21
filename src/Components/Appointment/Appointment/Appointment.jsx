import React, { useState } from 'react';
import AppointmentHeader from '../Appointmentheader/AppointmentHeader';




const Appointment = () => {
  const [selectedDate, setSelectedDate] =useState(new Date());
  const handleChange = date =>{
    selectedDate(date);
  }
    return (
        <div>
          <AppointmentHeader></AppointmentHeader>  
          
        </div>
    );
};

export default Appointment;