import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white border">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active mx-5" aria-current="page" href="#">HOME</Link>
        </li>
        <li className="nav-item dropdown">
          <Link to="/type" className="nav-link dropdown-toggle mx-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TRIP TYPES
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link to="/dog" className="dropdown-item" href="#">Dog-friendly</Link></li>
            <li><Link to="/child" className="dropdown-item" href="#">child-friendly</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link active mx-5" aria-current="page" href="#">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active mx-5" aria-current="page" href="#">CONTACT</Link>
        </li>
        <li className="nav-item">
          <Link to="/addService" className="nav-link active mx-5" aria-current="page" href="#">ADD SERVICE</Link>
        </li>
        <li className="nav-item">
          <Link to="/pay" className="nav-link active mx-5" aria-current="page" href="#">Pay</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link active mx-5" aria-current="page" href="#">Login</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  </div>;
};

export default Nav;
