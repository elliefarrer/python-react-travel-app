import ReactDOM from 'react-dom';
import React from 'react';

import CitiesIndex from './components/CitiesIndex';

class App extends React.Component {
  render() {
    return(
      <CitiesIndex />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
