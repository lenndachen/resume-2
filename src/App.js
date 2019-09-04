import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Dashboard from "./containers/Dashboard";
import * as ROUTES from "./constants/routes.js";
import About from "./containers/About";
import Resume from "./containers/Resume"; 
import TicTacToe from './containers/TicTacToe';
import Calculator from './containers/Calculator';
import Portfolios from './containers/Portfolio';
import Social_Card from './containers/Social-Card';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigation />
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.RESUME} component={Resume} />
            <Route exact path={ROUTES.TICTACTOE} component={TicTacToe} />
            <Route exact path={ROUTES.CALCULATOR} component={Calculator} />
            <Route exact path={ROUTES.PORTFOLIO} component={Portfolios}/>
            <Route exact path={ROUTES.SOCIALCARD} component={Social_Card}/>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;

