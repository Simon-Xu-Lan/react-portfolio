// dependencies
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import components
import Navbar from "./components/Navbar";
import Footer from './components/Footer';

// css
import "./css/styles.css";

import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Navbar/>
      <div id="router-content">
        <Switch>
          <Route exact path = "/" component={Portfolio} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
