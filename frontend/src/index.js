import ReactDOM from 'react-dom';
import React from 'react';

import CitiesIndex from './components/CitiesIndex';

class App extends React.Component {
  render() {
    return(
      <div className="container">
        <CitiesIndex />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
