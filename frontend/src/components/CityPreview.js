import React from 'react';
import propTypes from 'prop-types';

const CityPreview = ({ cities }) => {
  return cities.map(city => {
    console.log('The city in props is', city);
    <div key={city.id}>
      <h3>{city.name}</h3>
      <h4>{city.country}</h4>
    </div>;
  });
};

CityPreview.propTypes = {
  cities: propTypes.array.isRequired
};

export default CityPreview;
