import React, { useEffect, useState } from 'react';
import SingleHome from '../SingleHome/SingleHome';
import { Row } from 'react-bootstrap'
import Logo from '../Logo/Logo';

const Home = () => {
  const [homes, setHome] = useState([]);

  useEffect(() => {
    fetch('https://agile-peak-08182.herokuapp.com/services')
        .then(res => res.json())
        .then(data => {
          setHome(data)
            // setTeachs(home)
        })
}, [])

  return <div>
        <Logo/>
        <h2 className="text-center my-5">Blogs</h2>
        <Row xs={1} md={2} className="g-4 single-product mx-auto margin-btm">
            {
                homes.map(home=><SingleHome
                key={home._id}
                     home={home}
                     ></SingleHome>)
            }
          </Row>
  </div>;
};

export default Home;
