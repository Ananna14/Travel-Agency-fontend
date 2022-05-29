import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
        .then(res =>{
            console.log(res)
        })
    };
  return (
    <div>
       <form onSubmit={handleSubmit(onSubmit)} className='mt-5 mb-2 '>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <textarea {...register("Description")} placeholder='Description' className='mb-2 w-50 p-2 border-color' /><br/>
                    <input {...register("Due")} placeholder='Due' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Heading")} placeholder='Heading' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Day")} placeholder='Day' className='mb-2 w-50 p-2 border-color'  /><br/>
                    <input {...register("Image")} placeholder='Image' className='mb-2 w-50 p-2 border-color'  /><br/>
                   
                   
                    <input type="submit" className='border-color btn'/><br/>
                </form>
    </div>
  )
}

export default AddService