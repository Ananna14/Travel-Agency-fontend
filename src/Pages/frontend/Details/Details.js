import React from 'react'
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Details = () => {
    const {_id} = useParams();
    const { register, handleSubmit, reset } = useForm();
    const [singleService, setSingleService] = useState(null);
    const { user } = useAuth();

    useEffect(()=>{
        fetch(`https://agile-peak-08182.herokuapp.com/services/${_id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])
    // console.log(singleService);


    //FORM_DETAILS_ADDED_booking
    const onSubmit = data => {

        data.email = user.email;
        console.log(data);
        fetch("https://agile-peak-08182.herokuapp.com/confirmOrder",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),
        })
        .then((res)=>res.json())
        .then((result)=>console.log(result))
        if(data){
            Swal.fire(
                'Success!',
                'Order Successfully!',
                'success'
              )
          }
        }
 if(!singleService){
    return <div class="spinner-border text-danger text-center" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>
    
 }
  return (
    <div className="container">
       <div className="row">
       <div className='col-lg-6 col-sm-12'>
            <Card className="card shadow half-width m-5 pl-2">
                <div className="inner">
                    <Card.Img variant="top" className='img-design mx-auto' src={singleService?.Image} />
                </div>
                <Card.Body className="text-center">
                <Card.Title className="fw-bold mt-3">{singleService?.Heading}</Card.Title>
                    <div className='d-flex mt-5'>
                        {/* part-1-start */}
                        <div className=''>
                            <p> <i class="fas fa-map-marker-alt mx-2"></i>{singleService.Area}<br/></p>
                            <p> <i class="far fa-clock mx-2"></i><span>{singleService?.Day}<br/>Days Nights</span></p>
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
                {/* <input {...register("name", { required: true })} placeholder='heading' className='mb-2 w-100 p-2 border-color' defaultValue={user.displayName} /><br/>   */}
                <input {...register("heading", { required: true })} placeholder='heading' className='mb-2 w-100 p-2 border-color' defaultValue={singleService.Heading} /><br/>  
                    <input {...register("img", { required: true })} placeholder='img-url' defaultValue={singleService.Image} 
                      className='mb-2 w-100 p-2 border-color'  /><br/>
                    <input {...register("price", { required: true })} placeholder='Due' className='mb-2 w-100 p-2 border-color' defaultValue={singleService.Due} /><br/>
                    <input {...register("date")} type="date" placeholder='Date' className='mb-2 w-100 p-2 border-color'  /><br/>
                    <input {...register("Phone-Number")} placeholder='Phone-Number' 
                    type ="number"  className='mb-2 w-100 p-2 border-color'  /><br/>
                    <textarea {...register("Message")} placeholder='Write you Something__________________'
                    type="message" className='mb-2 w-100 p-2 border-color' /><br/>
                    <input className='btn rounded-pill w-100' type="submit" />
                </form>
            </div>
       </div>
    </div>
  )
}

export default Details