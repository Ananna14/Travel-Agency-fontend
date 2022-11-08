import axios from 'axios';
import React from 'react'
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminDashbord from '../../Admin/AdminDashbord/AdminDashbord';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://agile-peak-08182.herokuapp.com/services', data)
        .then(res =>{
            console.log(res)
        })
    };
  return (
    <div>
     <Container>
         <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 mx-auto shadow-lg p-5' style={{ maxWidth: '600px' }}>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
                    <input {...register("Due")} placeholder='Due' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Day")} placeholder='Day' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Image")} placeholder='Image' className='mb-2 w-50 p-2 border-color'  /><br/>
                   
                   
                    <input type="submit" className='border-color btn'/><br/>
                </form>
     </Container>
    </div>
  )
}

export default AddService