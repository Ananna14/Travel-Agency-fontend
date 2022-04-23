import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useForm} from "react-hook-form";
// import swal from 'sweetalert';
// import useAuth from '../../../hooks/useAuth';


const Courses = () => {
    const {_id}=useParams();
    const [home,sethome]=useState([])
    // const {user}=useAuth()
   

    useEffect(()=>{
        fetch(`http://localhost:5000/${_id}`)
        .then(res=>res.json())
        .then(data=>sethome(data))
    },[])
   
    
    // form
    const { register, handleSubmit,reset } = useForm();

    const onSubmit=(data)=>{
        data.name=home?.Heading;
        data.number=home?.Description;
        data.img=home?.Image;
        data.subject=home?.Area;
        data.salary=home?.Due;
        data.status=false;

        fetch('http://localhost:5000/orders',{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.acknowledged){
                reset()
                alert('successfully added')
                // swal("Success!", "Order Successfully!", "success");
               
            }
        })

        



        console.log(data)

    };
   
    return (
        <div className="product">
          <div className='row'>
                <div className='col col-lg-7 col-md-7 col-sm-12 col-12'>
                  
                <div className="card mb-3 single-card ">
                                <div className="row g-0 ">
                                    <div className="col-md-4 border text-center">
                                        <img src={home?.Image} className="img-fluid home-image" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body pb-4">
                                            <h3 className="card-title fw-bolder text-primary">{home?.Heading}</h3>
                                            <p className="card-text fw-bolder">Tuition Class : {home?.Description}</p>
                                            {/* <p className="card-text fw-bolder">Teaching : {home?.subject}</p> */}
                                            <p className="card-text fw-bolder">Qualification : {home?.Due}</p>
                                            <p className="card-text fw-bolder">Institute : {home?.Area}</p>
                                            <p className="card-text fw-bolder">Email : {home?.Day}</p>
                                            {/* <p className="card-text fw-bolder">Phone : {home?.mobile}</p>
                                            <p className="card-text fw-bolder">Salary : Tk {home?.salary}</p>
                                            <p className="card-text fw-bolder">Tuition Areas : {home?.area}</p> */}
                                         </div>
                                    </div>
                                </div>
                            </div>

                </div>
                {/* 2nd-part form */}
            <div className="col col-lg-5 col-md-5 col-sm-12 col-12 pt-5 ">
                <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                    {/* <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentName", { required: true, maxLength: 20 })} value={user?.displayName}/><br/> */}
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentName", { required: true, maxLength: 20 })}/><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentEmail", { required: true })} type="email" /><br/>
                    {/* <input className='w-75 py-2 mx-auto rounded mb-2 border' {...register("studentEmail", { required: true })} type="email" value={user?.email}/><br/> */}
                    <input className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentNumber")} placeholder="Phone Number" /><br/>
                    <textarea className='w-75 py-2 mx-auto rounded mb-2 border' type="number" {...register("studentMessage")} placeholder="Write you Something________________" /><br/>
                    <input className='w-75 py-2 mx-auto rounded mb-2 bg-primary text-white fw-bolder border-0'  type="submit" value="Submit" /> 

                </form>
            </div>

            </div>
        </div>
    )
}

export default Courses
