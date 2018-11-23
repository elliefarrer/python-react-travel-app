import ReactDOM from 'react-dom';
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

// Custom components
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';

import Home from './components/pages/Home';
import About from './components/pages/About';
import ForOtherDevs from './components/pages/ForOtherDevs';

import CitiesIndex from './components/cities/CitiesIndex';
import CitiesShow from './components/cities/CitiesShow';

class App extends React.Component {
  render() {
    return(
      <div className="page">
        <Header />
        <main className="container">
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/getthelook" component={ForOtherDevs} />
          <Route exact path="/cities" component={CitiesIndex}/>
          <Route path="/cities/:cityId" component={CitiesShow} />
        </main>
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
