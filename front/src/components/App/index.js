import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import ProductList from '../ProductList';
import Product from '../Product';
import Logout from '../Logout';
import PrivateRoute from '../PrivateRoute';
import CreateProduct from '../CreateProduct';
import Home from '../Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <PrivateRoute path="/fresh">
            <ProductList />
          </PrivateRoute>
          <PrivateRoute path="/product">
            <Product />
          </PrivateRoute>
          <PrivateRoute path="/newProduct">
            <CreateProduct />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}

export default App;
