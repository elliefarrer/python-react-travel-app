import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-light text-center">
      <div className="row">
        <div className="col-md-4">
          <Link to="/about">About</Link>
        </div>
        <div className="col-md-4">
          <p>© 2018 Ellie Farrer</p>
        </div>
        <div className="col-md-4">
          <Link to="/getthelook">For Other Developers</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
