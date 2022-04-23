import React from 'react';
import './Footer.css'

const Footer = () => {
  return <div>
      <div className='bg-color'>
              {/* part-1-start */}
              <div className="row align-center">
                    {/* <div className="col-12"> */}
                        <div className=' col-12 col-lg-3 fw-bold mt-5 first-part text-start'>
                            <h6 className='widget-title text-start'>Contact Info</h6>
                            <h6>Phone: +977-1-47012454</h6><hr/>
                            <h6>Email: info@xyz-adventure.com</h6><hr/>
                            <h6>GPO Box : 5612, Thamel ,Kathmandu</h6><hr/>
                            <h6>Fax Number: 503-555-1213</h6>
                        </div>
                        {/* part-1-end */}
                    {/* </div> */}
                    {/* part-2-start */}
                    {/* <div className="col-12"> */}
                        <div className=' col-12 col-lg-3 fw-bold mt-5 second-part text-start'>
                            <h6 className='widget-title text-start'>Destinations</h6>
                            <h6>Nepal</h6><hr/>
                            <h6>India</h6><hr/>
                            <h6>Tibet</h6><hr/>
                            <h6>Maldives</h6>
                        </div>
                    {/* </div> */}
                    {/* part-2-end */}
                    {/* part-3-start */}
                    {/* <div className="col-12"> */}
                            <div className='col-12 col-lg-3 third-part mt-5 text-start'>
                            <h6 className='widget-title text-start'>Activities</h6>
                            <h6>Road Cycling</h6><hr/>
                            <h6>Cultural Tours</h6><hr/>
                            <h6>Peak Climbing</h6><hr/>
                            <h6>Jungle Safari</h6>
                            </div>
                    {/* </div> */}
                    {/* part-3-end */}
                    {/* part-4-start */}
                    {/* <div className="col-12"> */}
                        <div className='col-12 col-lg-3 fw-bold four-part mt-5 text-start'>
                        <h6 className='widget-title text-start'>Trip Types</h6>
                            <h6>Nature Walk</h6><hr/>
                            <h6>Child-friendly</h6><hr/>
                            <h6>Dog-friendly</h6><hr/>
                            <h6>Cultural</h6><br/><br/>
                        </div>
                        <hr/><br/><br/>
                    {/* </div> */}
                    {/* part-4-end */}
                   
                   <div>
                        <div className='text-start'>
                        <small>© Copyright 2022 Travel Agency. Travel Agency | Developed By Rara Theme Powered by WordPress.</small>
                        </div>
                        <div className='text-end'>
                        <small>Privacy Policy</small>
                        </div>
                   </div>
                        
                    
               </div>
              
            </div>
  </div>;
};

export default Footer;
