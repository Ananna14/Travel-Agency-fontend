import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleHome.css'

const SingleHome = ({ home }) => {
    const {Image, Heading, Description, Area, Day, Due, _id } = home;
  return (
    <div className='col-lg-4 col-md-6 col-12'>
      <Card className="card shadow half-width m-4 pb-5">
       <div className="inner">
       <Card.Img variant="top" className='img-design mx-auto' src={Image} />
       </div>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold mt-3">{Heading}</Card.Title>
          <div className='d-flex mt-5'>
                  {/* part-1-start */}
                    <div className=''>
                     <p> <i class="fas fa-map-marker-alt mx-2"></i>{Area}<br/></p>
                     <p> <i class="far fa-clock mx-2"></i><span>{Day}<br/>Days Nights</span></p>
                    </div>
                  
                      {/* part-1-end */}
                  {/* part-2-start */}
                    <div className='margin'>
                      <span className='offer'> 24% off</span><br/><br/>
                      <h3 className='fw-bold'>{Due}</h3>
                    </div>
                      {/* part-2-end */}
                </div>
               <Link to={`/details/${_id}`}><button className='btn w-100 mt-5'>View Details</button></Link><br/><br/>
                <hr/><br/>
               <div className="text-start">
               <span className='gray-color fw-bold'>Available through out the year:</span><br/>
                <small class="card-text gray-color">{Description}</small>
               </div>
        
          {/* <Link to={`/courses/${teach?._id}`}><Button className="fw-bold border-0 px-4 fs-5">Details</Button></Link> */}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleHome


// import React from 'react';
// import { Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import './SingleHome.css'

// const SingleHome = ({home}) => {
//     const { img, header, description, Area, Day, Due } = home;
//   return(
//       {/* <div className="container"> */}
//             <div className='col-lg-4 col-md-6 col-12'>
//                     <Card className="card shadow m-4">
//                         <Card.Img variant="top" className='img-design mx-auto' src={img} />
//                         <Card.Body className="text-center">
//                         <Card.Title>{header}</Card.Title>
//                         <Card.Text>{description}</Card.Text>
//                         <Card.Text>{Area}</Card.Text>
//                         <Card.Text>{Day}</Card.Text>
//                         <Card.Text>{Due}</Card.Text>
//                         {/* <Card.Text>{area}</Card.Text> */}
//                         {/* <Link to={`/courses/${teach?._id}`}><Button className="fw-bold border-0 px-4 fs-5">Details</Button></Link> */}
//                         </Card.Body>
//                     </Card>
//             </div>
//         {/* </div> */}
//   </div>;
// };

// export default SingleHome;
