import React from 'react';
import axios from 'axios';

// Custom components
import CityPreview from '../common/CityPreview';

export default class CitiesIndex extends React.Component {
  state = {
    hasLoaded: false
  }

  componentDidMount = () => {
    console.log('Component mounted');
    axios.get('/api/cities/')
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
        {cities &&
          <div>
            <p className="text-muted">{cities.length} cities added...so far!</p>
            <div className="row">
              {cities.map(city =>
                <CityPreview city={city} />
              )}
            </div>
          </div>
        }
      </section>
    );
  }
}
