import React from 'react';
import axios from 'axios';

// Custom components
import CityPreview from './CityPreview';
// import DataProvider from './DataProvider';
// import CitiesColumns from './CitiesColumns';

export default class CitiesIndex extends React.Component {
  state = {
    hasLoaded: false
  }
  // BUG: Component mounted thing runs, but once axios request is done, it doesn't
  componentDidMount = () => {
    console.log('Component mounted');
    axios.get('/api/city/')
      .then(res => {
        console.log('Here we go', res.data);
        this.setState({ cities: res.data, hasLoaded: true });
        console.log('The state is now', this.state);
      });
    //     console.log('The res is', res.data);
    //     this.setState({ cities: res.data });
    //   })
    //   .catch(err => console.log('There was an error', err));
  }

  render() {
    const cities = this.state.cities;
    console.log('Render works');
    // if(this.state.cities.length > 0) {
      console.log('The state in render is', this.state);
      //BUG: this might be a babel issue??? Do the babel stuff like in Orbital
    // }
    return(
      <section>
        <h1>All Cities</h1>
        {this.state.hasLoaded && cities &&
          <div>
            <p className="text-muted">{cities.length} cities added...so far!</p>
            <CityPreview
              cities= {cities}
            />
          </div>
        }
      </section>
    );
  }
}
