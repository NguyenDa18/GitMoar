import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/users/User";
import NotFound from "./components/pages/NotFound";
import Alert from "./components/layout/Alert";
import "./styles.css";

// using Context for state mgmt
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        {/** Wrap App in Provider given by GithubState */}
        <Router>
          <div className="App">
            <Navbar title="GitMoar" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
