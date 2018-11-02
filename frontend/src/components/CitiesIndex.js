import React from 'react';
import axios from 'axios';

// Custom components
import CityPreview from './CityPreview';

export default class CitiesIndex extends React.Component {
  state = {
    hasLoaded: false
  }

  componentDidMount = () => {
    console.log('Component mounted');
    axios.get('/api/city/')
      .then(res => {
        console.log('Here we go', res.data);
        this.setState({ cities: res.data, hasLoaded: true });
        console.log('The state is now', this.state);
      });
  }

  render() {
    const cities = this.state.cities;
    console.log('The state in render is', this.state);
    return(
      <section>
        <h1>All Cities</h1>
        {this.state.hasLoaded && cities &&
          <div>
            <p className="text-muted">{cities.length} cities added...so far!</p>
            <div className="row">
              <CityPreview city={cities[0]} />
              <CityPreview city={cities[1]} />
              <CityPreview city={cities[2]} />
              <CityPreview city={cities[3]} />
              <CityPreview city={cities[4]} />
              <CityPreview city={cities[5]} />
              <CityPreview city={cities[6]} />

              {/* {this.state.cities.map(city => {
                <div key={city.id}>
                  <CityPreview city={city}/>
                </div>;
              })} */}
            </div>
          </div>
        }
      </section>
    );
  }
}
