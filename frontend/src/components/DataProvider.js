import React from 'react';
import PropTypes from 'prop-types';

export default class DataProvider extends React.Component {
  static PropTypes: {
    endpoint: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  }

  state: {
    data: [],
    loaded: false,
    placeholder: 'Loading...'
  }

  componentDidMount() {
    fetch(this.props.endpoint)
      .then(res => {
        if(res.status !== 200) {
          return this.setState({ placeholder: 'Oops! Something went wrong...' });
        }
        return res.json();
      })
      .then(data => this.setState({ data: data, loaded: true }));
  }


  render() {
    const { data, loaded, placeholder } = this.state;
    return loaded ? this.props.render(data) : <p>{placeholder}</p>;
  }
}
