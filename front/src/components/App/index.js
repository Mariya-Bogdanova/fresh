import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from '../ProductList';
import Product from '../Product';
import Login from '../Login';
import Logout from '../Logout';
import Signup from '../Signup';
import PrivateRoute from '../PrivateRoute';
import CreateProduct from '../CreateProduct';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Router>
      <nav>
        {!isAuthenticated
        && (
        <>
          <Link to="/login">Войти</Link>
          {' '}
          ::::::
          {' '}
          <Link to="/signup">Зарегистрироваться</Link>
        </>
        )}
        {isAuthenticated && <Link to="/logout">Выйти</Link>}
      </nav>
      <br />
      <Switch>
        <Route path="/" exact>
          колбаски
        </Route>
        <Route path="/logout">
          <Logout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
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
  );
}

export default App;
