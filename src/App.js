import React from 'react';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import Detail  from './components/Detail.js';
import Originals from './components/Home/Originals.js';
import Series from './components/Home/Series.js';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Search from './components/Search.js';
import Watchlist from './components/Home/Watchlist.js';
import Movies from './components/Home/Movies.js';
const App = () => {
  return (
    <>
     <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
       
        <Route path="/search" component={Search} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/originals" component={Originals} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Redirect to="/" />
      </Switch>
      <Footer />
     </Router>
     
    </>
  );
};

export default App;