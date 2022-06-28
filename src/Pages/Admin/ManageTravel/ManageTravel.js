import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageTravel = () => {
  const{_id} = useParams();
  const [homes, setHome] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/services')
        .then(res => setHome(res.data))
        .then(() => setLoading(false))
        .catch(err => console.log(err))
}, []);


 // BTN_DELETED_USER_SERVICE
const handleDelete = id =>{
  const url = `http://localhost:5000/services/${id}`
  fetch(url, {
    method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.deletedCount){
      alert('deleted');
      const remaining = homes.filter(home => home._id !== id);
      setHome(remaining);
    }
  
  })
}

  return (
    <div>
      <h5>Manage Tutors</h5>
     
  {
    loading ? 
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
:
    <Container>
                    <div className="p-5 shadow overflow-scroll" style={{ height: '85vh' }}>
                        <Table hover responsive className="product-table">
                            <thead className="border-top">
                                <tr>
                                    <th>#</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Due</th>
                                    <th colSpan="2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   homes.map((home, index) => {
                                        return (
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td><img style={{ height: '100px', width: '120px' }} src={home.Image} alt="" /></td>
                                                {/* <td>{home.name}</td> */}
                                                <td>{home.Heading}</td>
                                                <td>{home.Due}</td>
                                                <td
                                                    onClick={() => handleDelete(home._id)}
                                                    style={{ cursor: 'pointer' }}
                                                ><BsFillTrashFill className="text-danger" /></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Container>
  }
    </div>
  )
}

export default ManageTravel