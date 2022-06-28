import React from 'react'
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
     const [success, setSuccess] = useState(false);
     const { token } = useAuth();

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};
        fetch(`http://localhost:5000/users/admin`,{
            method: 'PUT',
            headers:{
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount){
               
                console.log(data);
                setSuccess(true);
            }
        })
        e.preventDefault()
    }
 
  return (
    <div className="margin-btm">
       <div>
            <Container>
                    <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '600px' }}>
                        <h3 className="text-center fw-bold">Make Admin</h3>
                        <Form onSubmit={handleAdminSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email"
                                onBlur={handleOnBlur} 
                                placeholder="Enter email" />
                            </Form.Group>

                            <Button className="" variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Container>
                {success && <div style={{justifyContent:"center", alignItems:"center" }} class="alert alert-success w-50" role="alert">
                        Make Admin Successfully!
                            </div>}
       </div>
     </div>
  )
}

export default MakeAdmin