import React, { useState } from 'react';
import AppointmentHeader from '../Appointmentheader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';




const Appointment = () => {
  const [selectedDate, setSelectedDate] =useState(new Date());
  const handleChange = date =>{
    selectedDate(date);
  }
    return (
        <div>
          <AppointmentHeader></AppointmentHeader>  
          <BookAppointment date={selectedDate}></BookAppointment>
          
        </div>
    );
};

export default Appointment;