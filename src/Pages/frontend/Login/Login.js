import React from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  
  return (
    <div className='margin-btm'>
         <h2 className="py-5">Login Page</h2>
       <Container className="shadow-lg py-5 rounded" style={{ minWidth: 445, maxWidth: 580, mx: 'auto' }}>
            <Form>
           <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextEmail" >
                    <Col sm="10">
                    <Form.Control type="email" className="border-form" placeholder="Your Email*" />
                    </Col>
                </Form.Group>   
                <Form.Group as={Row} className="mb-3 form-center" controlId="formPlaintextPassword">
                    <Col sm="10">
                    <Form.Control type="password" className="border-form" placeholder="Your Password*" />
                    </Col>
                </Form.Group>   
            </Form>
            <button className='btn w-50'>LOGIN</button>
            <Link to="/register" className='text-decoration'><p className='py-2'>New User? Please Resister.</p></Link>
            <button className='btn w-50'>Google Login</button>
       </Container><br/><br/>
       <Link to="/home" className='text-decoration mt-5'><p className='cancle-btn'>Cancle</p></Link>
    </div>
  )
}

export default Login