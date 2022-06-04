import React, { useEffect, useState } from 'react'

const MyOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/booking`)
        .then(res => res.json())
        .then(data => console.log(orders))
    })
  return (
    <div className="margin-btm py-5">
          <marquee><h1 className="my-5 pink-color">WELCOME MY ORDERS PAGE</h1></marquee>
    </div>
  )
}

export default MyOrder