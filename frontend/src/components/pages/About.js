import React from 'react';
import { Link } from 'react-router-dom';

export default class About extends React.Component {
  render() {
    return(
      <section>
        <h2>About</h2>
        <p>Vacilando is a travel diary app, based loosely on Lonely Planet.</p>
        <p>The app was built by British programmer and General Assembly teaching assistant, Ellie Farrer, as a way to store travel memories, and to get inspiration for the next trip. Vacilando aims to offer a non-pretentious, down-to-earth platform to share honest info about various countries and cities, advice, and - of course - travel photos! It also serves as a place for the user to keep track of the countries and cities they have visited, and the hopefully-but-not-necessarily-happy memories.</p>
        <p>Future features will include authentication (obviously, so users can actually <em>use</em> the app), a detailed review system, graphs, and maps</p>
        <p>For more info on the developer, please see:</p>

        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://elliefarrer.io">Website</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/platypotomus">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://medium.com/@elliefarrerio">Medium</a>
            </li>
          </ul>
        </nav>
      </section>
    )
  }
}
