import React from 'react'
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Details = () => {
    const {_id} = useParams();
    const { register, handleSubmit } = useForm();
    const [singleService, setSingleService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${_id}`)
        .then(res => res.json())
        .then(data => setSingleService(data))
    },[])
    // console.log(singleService);

    //FORM_DETAILS_ADDED
    const onSubmit = data => {
        console.log(data)
    };

  return (
    <div style={{display: "flex"}}>
        <div className='col-lg-4'>
            <Card className="card shadow half-width m-4 pb-5 pl-2">
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
                            <h3 className='fw-bold'>{singleService.Due}</h3>
                        </div>
                            {/* part-2-end */}
                    </div>
                    <Link to="/home"><button className='btn w-100 mt-5'>Back</button></Link><br/><br/>
                        <hr/><br/>
                    <div className="text-start">
                    <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                        <small class="card-text gray-color">{singleService.Description}</small>
                    </div>
                </Card.Body>
            </Card>
        </div>
        {/* FORM */}
        <div className="form-details col-lg-8">
        <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 '>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
                    <input {...register("Due")} placeholder='Due' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Day")} placeholder='Day' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Image")} placeholder='Image' className='mb-2 w-50 p-2 border-color'  /><br/>
                   
                   
                    <input type="submit" className='border-color bg'/><br/>
                </form>
        </div>
    </div>
  )
}

export default Details