import React from 'react';

export default class Home extends React.Component {

  getRandomMessage = () => {
    const possibleMessages = ['Welcome', 'Bienvenue', 'Bienvenido', 'Benvenuto', 'Willkommen', 'Bem-Vindo'];
    return possibleMessages[Math.floor(Math.random() * possibleMessages.length)];
  }

  componentDidMount = () => {
    console.log('Component mounted');
  }

  render() {
    console.log('State is', this.state);
    return(
      <section>
        <h1 className="display-1 text-center">{this.getRandomMessage()}</h1>
      </section>
    );
  }
}
