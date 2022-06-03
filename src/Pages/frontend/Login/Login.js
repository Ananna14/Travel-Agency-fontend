import React, { useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
  const [loginData, setloginData] = useState({});
  const { user, authError, loginUser, isLoading, signInWithGoogle } = useAuth();

  const location = useLocation();
  const history = useNavigate();

  const handleOnBlur = e =>{
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLogInData = {...loginData};
    // console.log(newLogInData);
    newLogInData[field] = value;
    setloginData(newLogInData);
  }

  const handleLoginSubmit = (e) =>{
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  }
  return (
    <div className='margin-btm'>
         <h2 className="py-5">Login Page</h2>
         {/* spiner-user-success-error */}
     
         {isLoading && <div class="spinner-border text-danger text-center" role="status">
                        <span class="visually-hidden">Loading...</span>
                        </div>}
                        {user?.email && <div class="alert alert-success w-50" role="alert">
                        User Login Successfully!
                            </div>}
                            <p className="text-center text-danger">{authError}</p>
                            {/* {authError && <div class="alert alert-danger w-50" role="alert">
                            {authError}
                            </div>} */}
       <Container className="shadow-lg py-5 rounded" style={{ minWidth: 445, maxWidth: 580, mx: 'auto' }}>
            <Form onSubmit={handleLoginSubmit}>
           <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextEmail" >
                    <Col sm="10">
                    <Form.Control type="email" name="email" onBlur={handleOnBlur} className="border-form" placeholder="Your Email*" />
                    </Col>
                </Form.Group>   
                <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextPassword">
                    <Col sm="10">
                    <Form.Control type="password" name="password" onBlur={handleOnBlur} className="border-form" placeholder="Your Password*" />
                    </Col>
                </Form.Group>   
                <button className='btn w-50'>LOGIN</button>
            </Form>
            <Link to="/register" className='text-decoration'><p className='py-2'>New User? Please Resister.</p></Link>
            <button  onClick={() => signInWithGoogle(location, history)} className='btn w-50'>Google Login</button>
       </Container><br/><br/>
       <Link to="/home" className='text-decoration mt-5'><p className='cancle-btn'>Cancle</p></Link>
    </div>
  )
}

export default Login