import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const{_id} = useParams();
  const {user} = useAuth();

  const [bookings, setBookings] = useState(null);

    // SINGLE_USER_SERVICE_LOAD
    useEffect( ()=>{
      // const url = (`https://morning-lowlands-93777.herokuapp.com/booking?email=${user.email}`)
      if(user.email){
        const url = `http://localhost:5000/myOrders?email=${user.email}`
      fetch (url)
      .then(res => res.json())
      // .then(data => setBookings(data));
      .then(data =>{
         setBookings(data);
         console.log(data, user)
      });
      }
      else{
        console.log('user not found')
      }
  }, [user])
// console.log(bookings);

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
      const remaining = bookings.filter(booking => booking._id !== id);
      setBookings(remaining);
    }
  
  })
}

if(!bookings){
  return  <div class="spinner-border text-danger text-center" role="status">
  <span class="visually-hidden">Loading...</span>
  </div>

  
}
  return (
    <div className="margin-btm py-5">
          <marquee><h1 className="my-5 pink-color">WELCOME MY ORDERS PAGE</h1></marquee>
          <div className='row'>
           {
                  bookings.map(booking => <div key={booking._id}  bookings={bookings}  className="col-lg-4 col-sm-6 col-12">
                     <>
                        <Card className='m-4 margin-card border-radius shadow-lg' style={{justifyContent: "center", alignItems: "center"}}>
                            <Card.Img variant="top" className='card-img' src={booking?.img} />
                            <Card.Body><br/>
                            <i className='status-colors'>{booking?.email}</i><br/><br/>
                            <Card.Title className="fw-bold">{booking.heading}</Card.Title>
                            <Card.Text className="fw-bold">
                                ${booking?.price}
                            </Card.Text>
                            <Card.Text>
                                {booking?.Description}
                            </Card.Text>
                            {/* <p className="status-colors">{booking.status}</p> */}
                            <button className="btn-color" onClick={() => handleDelete(booking._id)}>Delete</button>
                            </Card.Body>
                            {/* <Link to={`/admin/admin/pay/${booking._id}`}><button className='btn-color px-5 mb-5'>Pay</button></Link> */}
                        </Card>
               </>
                  </div>)
}
           </div>
    </div>
  )
}

export default MyOrder