import React from 'react';
import './Contact.css'

const Contact = () => {
  return <div>
      <div className="container">
      <h1 className='page-title text-start mt-5'>Contact Us</h1>
      <img className='img-fluid' src="https://rarathemesdemo.com/travel-agency/wp-content/uploads/sites/117/2018/05/img25-1-1290x513.jpg" alt="" />
      </div>
      {/* form-design */}
        <div className="container">
        <form className='mt-5 w-50'>
          <div class="mb-3">
            <h6 className='text-start'>Name*</h6>
            <input type="email" placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
          <h6 className='text-start'>Email*</h6>
            <input type="password" className="w-50" placeholder='Password' class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3">
            <h6 className='text-start'>Phone Number*</h6>
            <input type="email" placeholder='Phone Number' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <h6 className='text-start'>Country*</h6>
            <input type="email" placeholder='Country' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <h6 className='text-start'>Subject*</h6>
            <input type="email" placeholder='Subject' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <div class="mb-3">
            <h6 className='text-start'>Message*</h6>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="button" class="btn btn-outline btn-align margin-btm">SEND</button>
        </form> 
        </div>
  </div>;
};

export default Contact;
