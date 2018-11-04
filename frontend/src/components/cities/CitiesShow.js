import React from 'react';
import axios from 'axios';

export default class CitiesShow extends React.Component {
  state = {
    hasLoaded: false
  }

  componentDidMount = () => {
    console.log('Component mounted');
    console.log('Should get', this.props.match.params.cityId);
    axios.get(`/api/city/${this.props.match.params.cityId}`)
      .then(res => {
        this.setState({ city: res.data, hasLoaded: true });
        console.log('Res data is', res.data);
      });
  }
  render() {
    const city = this.state.city;
    console.log('City is', this.state.city);
    return(
      <section>
        {this.state.hasLoaded && city &&
          <div>
            <img src={city.img} alt={city.name} />
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>

            <h5>About {city.name}</h5>
            <p>Population: {city.population}</p>
          </div>
        }

      </section>
    );
  }
}
