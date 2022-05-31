import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';


const Register = () => {
  const [registrationData, setRegistrationData] = useState({});
  const { user, resisterUser, isLoading, authError, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = {...registrationData};
    // console.log(newLoginData);
    newLoginData[field] = value;
    setRegistrationData(newLoginData);
  }

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
   if(registrationData.password !== registrationData.confirmPassword){
     alert('Password did not match');
     return;
   }
    resisterUser(registrationData.email, registrationData.confirmPassword, registrationData.name, location, history);
}

  return (
    <div className='margin-btm'>
       <Container>
       <h2 className="py-5">Resister</h2>
         {/* success-msg and error-alert */}
     
                        {user?.email && <div class="alert alert-success" role="alert">
                           User Created Successfully!
                            </div>}
                            {isLoading && <div class="spinner-border text-danger" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
                            {authError && <div class="alert alert-danger" role="alert">
                            {authError}
                            </div>}
       <Container className="shadow-lg py-5 rounded" style={{ minWidth: 445, maxWidth: 580, mx: 'auto' }}>
            <Form onSubmit={handleRegistrationSubmit} >
           <Form.Group as={Row} className="mb-3 form-center" >
                    <Col sm="10">
                    <Form.Control type="text" className="border-form" 
                    onBlur={handleOnBlur}
                    name="name"
                    placeholder="Your Name*" />
                    </Col>
                </Form.Group>   
           <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextEmail" >
                    <Col sm="10">
                    <Form.Control type="email" name="email" className="border-form" 
                    onBlur={handleOnBlur} placeholder="Your Email*" />
                    </Col>
                </Form.Group>   
                <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextPassword">
                    <Col sm="10">
                    <Form.Control type="password" className="border-form" 
                    onBlur={handleOnBlur} name="password" placeholder="Your Password*" />
                    </Col>
                </Form.Group>   
                <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextPassword">
                    <Col sm="10">
                    <Form.Control type="password" className="border-form" 
                    onBlur={handleOnBlur} name="confirmPassword" placeholder="Retype Password*" />
                    </Col>
                </Form.Group>
                <button className='btn w-50'>RESISTER</button>   
            </Form>
          
            <Link to="/login" className='text-decoration'><p className='py-2'>Already have an account? Login Here</p></Link>
            <button onClick={()=>signInWithGoogle(location, history)} className='btn w-50'>Google Login</button>
       </Container><br/><br/>
   
       <Link to="/home" className='text-decoration mt-5'><p className='cancle-btn'>Cancle</p></Link>
       </Container>
    </div>
  )
}

export default Register