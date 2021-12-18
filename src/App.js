import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import Subscriptions from "./pages/Subscriptions";
import Progress from "./pages/Progress";
import Progress_Edit from "./pages/Progress_Edit"


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Subscriptions" component={Subscriptions} />
          <Route path="/Progress" exact component={Progress} />
          <Route path="/Progress/:id" component={Progress_Edit} />
        </Switch>
      </Router>
    </>
    </ApolloProvider>
  );
}

export default App;
