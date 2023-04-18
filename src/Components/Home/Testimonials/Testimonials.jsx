import React from 'react';
import people1 from '../../../assets/people1.png';
import people2 from '../../../assets/people2.png';
import people3 from '../../../assets/people3.png';
import TestimonyDetails from '../TestimonyDetails/TestimonyDetails';
import './Testimonial.css'

const Testimonials = () => {
    const testimonials =[
                {
                    name:'Winson Henry',
                    img: people1,
                    queto:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                    area:'calefornia'

            },
            {
                name:'Winson Henry',
                img: people2,
                queto:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                area:'Newyork'   
            },
            {
            name:'Winson Henry',
            img: people3,
            queto:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            area:'gorgia'

            }
        ]

    return (
        <section className='services-container mt-5'>
            <container>
                <div className='header-text'>
                <h4 style={{color:'#1CC7C1'}}>Testimonial</h4>
                <h2>What people Say about us</h2>
                </div>
                <div className='d-flex justify-content-center' > 
                    <div className='w-75 row mt-5 pt-5'>
                        {
                        testimonials.map(testimony=><TestimonyDetails testimony={testimony}></TestimonyDetails> )
                        }
                    </div>
                </div>
            </container>
        </section>
    );
};

export default Testimonials;