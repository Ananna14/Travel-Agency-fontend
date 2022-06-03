import React from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import AdminDashbord from '../AdminDashbord/AdminDashbord';

const MakeAdmin = () => {
 
  return (
    <div className="margin-btm mt-5">
     {/* <AdminDashbord/> */}
       <div>
            <Container>
                    <div className="mx-auto shadow-lg p-5" style={{ maxWidth: '600px' }}>
                        <h3 className="text-center fw-bold">Make Admin</h3>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Button className="" variant="success" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Container>
       </div>
     </div>
  )
}

export default MakeAdmin