import React from 'react';
import featured from '../../../assets/featured.png'

const FeaturedService = () => {
    return (
        <section className='features-service pb-0 pb-md-5 my-5'>
            <div className='container mb-5'>
                <div className='row mb-5'>
                    <div className='col-md-5 mb-4 m-md-0'>
                        <img className='img-fluid' style={{height: '576px', width:'458px'}} src={featured} alt="" />
                    </div>

                    <div className='col-md-7 align-self-center'>
                        <h1>Exceptional Dental Care</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum perferendis placeat ducimus impedit adipisci vel maiores, velit porro vero ipsa a illo, earum quisquam accusamus numquam corporis ipsum officia! Autem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate dignissimos, cumque quibusdam quam repudiandae nesciunt.</p>
                        <button className='btn btn-primary'>learn more</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FeaturedService;