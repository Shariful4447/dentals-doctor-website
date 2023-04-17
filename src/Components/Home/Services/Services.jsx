import React from 'react';
import flouride from '../../../assets/fluoride.png';
import cavity from '../../../assets/cavity.png';
import whitening from '../../../assets/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
    name:'Flouride Treatment',
    img:flouride
    },
    {
        name:'Cavity Treatment',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitening
    },

]

const Services = () => {
    return (
        <section className='services-container mt-5'>
            <div className='text-center'>
            <h4 style={{color:'#1CC7C1'}}>Our Services</h4>
            <h2>Services We provide</h2>
            </div>
            <div className='d-flex justify-content-center' > 
                <div className='w-75 row mt-5 pt-5'>
                    {
                       serviceData.map(service=><ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;