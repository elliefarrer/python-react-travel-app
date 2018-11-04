import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

const CityPreview = ( city ) => {
  console.log('This city is', city.city.name);
  return (
    <div key={city.city.id} className="col-6">
      <Link to={`/cities/${city.city.id}`}>
        <img className="img-thumbnail" src={city.city.img} />
        <h3>{city.city.name}</h3>
        <h4>{city.city.country}</h4>
      </Link>
    </div>
  );
};

CityPreview.propTypes = {
  city: propTypes.object.isRequired
};

export default CityPreview;
