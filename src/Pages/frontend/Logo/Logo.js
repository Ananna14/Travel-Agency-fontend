import React from 'react';
import logo from './../../../images/Capture.PNG'
import './Logo.css'

const Logo = () => {
  return <div>
           <div className="container mt-5 mb-5">
               <div className="row">
               <div className="col-12 col-lg-6 d-flex">
                    <div>
                        <img src={logo} alt="" />
                    </div>
            
                    <div className='text-start mx-3 col'>
                        <h2>Travel Agency</h2>
                        <h6>Hassle Free Online Travel Booking Theme</h6>
                    </div>
               </div>
               <div className='col-12 col-lg-6'>
               <h6>Call us, we are open 24/7</h6>
               <h2 className='color-num'>(888) 123-45678</h2>
               </div>
             </div>
     
               </div>
  </div>;
};

export default Logo;
