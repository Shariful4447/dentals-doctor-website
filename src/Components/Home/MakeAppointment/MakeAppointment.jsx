import React from 'react';
import doctor from '../../../assets/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    return (
        <section className='make-apointment'>
            <div className='container'>
                <dir className='row'>
                    <div className='col-md-5 d-none d-md-block'>
                        <img src={doctor} alt="" />
                    </div>

                    <div className='col-md-7 text-white py-5'>
                        <h5 className='text-blue text-uppercase'>Appointment </h5>
                        <h1 className='text-white my-4'>Make An Appointment Today <br /></h1>
                        <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dignissimos distinctio pariatur commodi architecto! Qui aliquam iure nesciunt temporibus ipsum facilis odit exercitationem at vel, assumenda magnam vero architecto. Magnam alias debitis error quos non fugiat repellat dolorem nam enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit repellendus tenetur, nesciunt quae nisi asperiores.</p>
                        <button className='btn btn-primary'>Read more</button>
                    </div>
                </dir>
            
            </div>
        </section>
    );
};

export default MakeAppointment;