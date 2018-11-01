import React from 'react';
import axios from 'axios';

// Custom components
// import DataProvider from './DataProvider';
// import CitiesColumns from './CitiesColumns';

export default class CitiesIndex extends React.Component {

  // BUG: Component mounted thing runs, but once axios request is done, it doesn't
  componentDidMount = () => {
    console.log('Component mounted');
    axios.get('/api/city/')
      .then(res => {
        console.log('Here we go', res.data);
        this.setState({ cities: res.data });
        console.log('The state is now', this.state);
      });
    //     console.log('The res is', res.data);
    //     this.setState({ cities: res.data });
    //   })
    //   .catch(err => console.log('There was an error', err));
  }

  render() {
    console.log('Render works');
    return(
      <section>
        <h1>All Cities</h1>
        {/* <DataProvider
          endpoint="api/city"
          render={data => <CitiesColumns data={data} />}
        /> */}

      </section>
    );
  }
}
