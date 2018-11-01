import React from 'react';
import propTypes from 'prop-types';

const CityPreview = ( city ) => {
  console.log('This city is', city.city.name);
  return (
    <div key={city.city.id} className="col-6">
      <img className="img-thumbnail" src={city.city.img} />
      <h3>{city.city.name}</h3>
      <h4>{city.city.country}</h4>
    </div>
  );
};

CityPreview.propTypes = {
  city: propTypes.object.isRequired
};

export default CityPreview;
