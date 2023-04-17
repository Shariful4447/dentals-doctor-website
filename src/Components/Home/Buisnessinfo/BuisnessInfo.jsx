import React from 'react';
import InfoCard from '../InfoCard/InfoCard';

import { faClock, faMap, faPhone } from '@fortawesome/free-solid-svg-icons'
const infosData=[
    {title :'opening hours',
    description: 'We are Open 7 Days',
    icon: faClock,
    background:'primary'
    },
    {
        title :'Visit our location',
        description: 'Vettersstrase, 09126, Chemnitz, Germany',
        icon: faMap,
        background:'dark'
    },
    {
        title :'Call Us Now for Appointment',
        description: '+49100000000000',
        icon: faPhone,
        background:'primary'
    }

]

const BuisnessInfo = () => {
    return (
       <section className='d-flex justify-content-center' > 
            <div className='w-75 row'>
                {
                    infosData.map((info) =><InfoCard info={info}></InfoCard>)
                }
            </div>
       </section>
    );
};

export default BuisnessInfo;