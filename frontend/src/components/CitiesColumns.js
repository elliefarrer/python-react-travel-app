import React from 'react';
import PropTypes from 'prop-types';
// import key from 'weak-key';

const CitiesColumns = ({ data }) =>
  !data.length ? (
    <p>Nothing to see here</p>
  ) : (
    <section>
      <p className="text-muted">{data.length} cities added...so far...</p>
      <div className="row">

      </div>
    </section>
  );

CitiesColumns.PropTypes = {
  data: PropTypes.array.isRequired
};

export default CitiesColumns;
