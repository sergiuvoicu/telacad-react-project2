import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Terms from './pages/Terms/Terms';
import Login from './pages/Login/Login';
import Page404 from './pages/Page404/Page404';
import Category from './pages/Category/Category';
import Cart from './pages/Cart/Cart';
import Favorites from './pages/Favorites/Favorites';
import Product from './pages/Product/Product';

import './utils/utility-classes.css';


function App() {
  return(
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home}/>

        <Route path="/login" component={Login}/>
        
        <Route path="/cart" component={Cart}/>
        <Route path="/favorites" component={Favorites}/>
        <Route path="/about" component={About}/>
        <Route path="/terms-and-conditions" component={Terms}/>

        <Route path="/category/:categoryName" component={Category}/>
        <Route path="/product/:productId" component={Product}/>

        <Route path="*" component={Page404}/>
      </Switch>
    </div>
  );
}

export default App;
