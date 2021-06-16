import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { authentication } from '../../redux/actions/authActions ';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    userName: '',
    userPassword: '',
  });
  const { userName, userPassword } = inputs;
  const [error, setError] = useState(false);

  async function submitLogin(event) {
    try {
      event.preventDefault();
      const response = await axios.post('/auth/login', { userName, userPassword });
      if (response.status === 200) {
        dispatch(authentication());
        return history.push('/secret');
      }
    } catch {
      setError('Повторите вход');
    }
    return setError('Повторите вход');
  }

  function controlInputs({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return (
    <form action="" method="post" onSubmit={submitLogin}>
      <label htmlFor="userName">
        Login:
        <input id="userName" type="text" name="userName" required value={userName} onChange={controlInputs} />
      </label>
      <label htmlFor="userPassword">
        Password:
        <input id="userPassword" type="password" name="userPassword" required value={userPassword} onChange={controlInputs} />
      </label>
      <button type="submit">Войти</button>
      <div className="error">{error}</div>
      <Link to="/">HOME</Link>
    </form>
  );
}

export default Login;
