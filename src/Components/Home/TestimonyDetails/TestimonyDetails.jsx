import React from 'react';

const TestimonyDetails = ({testimony}) => {
    return (
        <div style={{boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'}} className='col-md-4 text-left'>
             <p className='text-secondary text-left'>{testimony.queto}</p>
             <img style={{height:'50px', float: 'left', marginRight: '10px'}} src={testimony.img} alt="" />
             <div style={{lineHeight: 0, display: 'inline-block', verticalAlign: 'top'}}>
                <h5 className='mt-3 mb-3' style={{display: 'inline-block', verticalAlign: 'top'}}>{testimony.name}</h5>
                <p>{testimony.area}</p>

             </div>
             
            
        </div>
    );
};

export default TestimonyDetails;