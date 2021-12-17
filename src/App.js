import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Users from './pages/Users';
import Subscriptions from './pages/Subscriptions';
import Progress from './pages/Progress';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Subscriptions' component={Subscriptions} />
          <Route path='/Progress' component={Progress} />
        </Switch>
      </Router>
    </>
  );
}

export default App;