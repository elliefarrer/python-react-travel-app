import React from 'react';
import axios from 'axios';

// Custom components
// import DataProvider from './DataProvider';
// import CitiesColumns from './CitiesColumns';

export default class CitiesIndex extends React.Component {

  // BUG: REQUESTS AREN'T GOING THROUGH, MIGHT BE AN ERROR WITH THE URLS. CANNOT IMPORT INCLUDE, HAVE A LOOK AT THIS
  componentDidMount() {
    axios.get('/api/city/')
      .then(res => {
        console.log('The res is', res.data);
        this.setState({ cities: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <section>
        <h1>All Cities</h1>
        {/* <DataProvider
          endpoint="api/city"
          render={data => <CitiesColumns data={data} />}
        /> */}
        {this.state.cities &&
          <p className="text-muted">{this.state.cities.length} cities added...so far...</p>
        }
      </section>
    );
  }
}
