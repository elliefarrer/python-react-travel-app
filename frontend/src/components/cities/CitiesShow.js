import React from 'react';
import axios from 'axios';

export default class CitiesShow extends React.Component {
  state = {
    hasLoaded: false
  }

  formatPopulation = pop => {
    const stringified = pop.toString();

    if(stringified.length >= 7) {
      return `${stringified.substr(0, stringified.length - 6)}.${stringified.substr(1,1)}M`;
    } else if(stringified.length >= 4) {
      return `${stringified.substr(0, stringified.length - 3)},${stringified.substr(stringified.length - 3)}`;
    } else {
      return stringified;
    }
  }

  componentDidMount = () => {
    console.log('Component mounted');
    console.log('Should get', this.props.match.params.cityId);
    axios.get(`/api/city/${this.props.match.params.cityId}`)
      .then(res => {
        // this.setState({ city: res.data[this.props.match.params.cityId-1], hasLoaded: true });
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
            <img className="img-fluid" src={city.img} alt={city.name} />
            <h2>{city.name}</h2>
            <h3>{city.country}</h3>

            <h5>About {city.name}</h5>
            <p>Population: <span className="text-muted">{this.formatPopulation(city.population)}</span></p>
          </div>
        }

      </section>
    );
  }
}
