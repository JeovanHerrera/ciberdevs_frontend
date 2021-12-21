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
import Progress_Create from "./pages/Progress_Create"
import Subscriptions_Create from "./pages/Subscriptions_Create"


const client = new ApolloClient({
  uri: 'https://backend-admin-project.herokuapp.com/graphql',
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/Projects" component={Projects} />
          <Route path="/Subscriptions" exact component={Subscriptions} />
          <Route path="/Subscriptions/Create/" component={Subscriptions_Create} />
          <Route path="/Progress" exact component={Progress} />
          <Route path="/Progress/Create/:id" component={Progress_Create} />
          <Route path="/Progress/Create/" component={Progress_Create} />
          
        </Switch>
      </Router>
    </>
    </ApolloProvider>
  );
}

export default App;
