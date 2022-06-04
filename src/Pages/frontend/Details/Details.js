import React from 'react'
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Details = () => {
    const {_id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [singleService, setSingleService] = useState({});
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${_id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])
    // console.log(singleService);

    //FORM_DETAILS_ADDED_booking
    const onSubmit = (_id) => {
        const orderDetails = {
            orderId: _id,
            name: user.displayName,
            email: user.email,
            img: singleService.Image,
            Due: singleService.Due,
            Heading: singleService.Heading,
            // number: singleService?.mobile,
            // message: singleService?.message,
            // status: 'Pending',
    
        }
        console.log(orderDetails);
        // SEND_TO_THE_SERVER
        fetch(`http://localhost:5000/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    reset();
                    alert('Order Successful');
                    // history.push('/products');
                }
            });
    //   console.log(data);
    };

  return (
    <div className="container">
       <div className="row">
       <div className='col-lg-6 col-sm-12'>
            <Card className="card shadow half-width m-5 pl-2">
                <div className="inner">
                    <Card.Img variant="top" className='img-design mx-auto' src={singleService.Image} />
                </div>
                <Card.Body className="text-center">
                <Card.Title className="fw-bold mt-3">{singleService.Heading}</Card.Title>
                    <div className='d-flex mt-5'>
                        {/* part-1-start */}
                        <div className=''>
                            <p> <i class="fas fa-map-marker-alt mx-2"></i>{singleService.Area}<br/></p>
                            <p> <i class="far fa-clock mx-2"></i><span>{singleService.Day}<br/>Days Nights</span></p>
                        </div>
                        
                            {/* part-1-end */}
                        {/* part-2-start */}
                        <div className='margin'>
                            <span className='offer'> 24% off</span><br/><br/>
                            <h3 className='fw-bold'>${singleService.Due}</h3>
                        </div>
                            {/* part-2-end */}
                    </div>
                    <Link to="/home"><button className='btn w-100 mt-5'>Back</button></Link><br/><br/>
                        <hr/><br/>
                    <div className="text-start py-5">
                    <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                        <small class="card-text gray-color">{singleService.Description}</small>
                    </div>
                </Card.Body>
            </Card>
        </div>
            {/* FORM */}
            <div className="form-details col-lg-6 col-sm-12 py-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("User-Name")} placeholder='User-Name' className='mb-2 w-100 p-2 border-color' defaultValue={user?.displayName} /><br/>
                    <input {...register("Usr-Email")} placeholder='Usr-Email' className='mb-2 w-100 p-2 border-color' defaultValue={user.email} /><br/>
                    <input {...register("Phone-Number")} placeholder='Phone-Number' 
                    type ="number"  className='mb-2 w-100 p-2 border-color'  /><br/>
                    <textarea {...register("Message")} placeholder='Write you Something__________________'
                    type="message" className='mb-2 w-100 p-2 border-color' /><br/>
                   
                    <button className='btn mt-4 px-5'>Book</button>
                    {/* <input onClick={() => onSubmit(singleService._id)} type="Book" className='btn' style={{color:"dark"}}/><br/> */}
                </form>
            </div>
       </div>
    </div>
  )
}

export default Details