import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductList from '../ProductList';
import Login from '../Login';
import Logout from '../Logout';
import Signup from '../Signup';
import PrivateRoute from '../PrivateRoute';

function App() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);
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
        <PrivateRoute path="/secret">
          <ProductList />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
