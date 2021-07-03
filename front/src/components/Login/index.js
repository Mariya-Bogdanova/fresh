import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/named
import { authentication } from '../../redux/actions/authActions ';
import { setProducts } from '../../redux/actions/productsAction';
import { useCreateDayOfLife } from '../../hooks/hooks';
import styles from './Login.module.scss';

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
        const responseProducts = await axios('/api');
        const NewProducts = responseProducts.data.map((product) => useCreateDayOfLife(product));
        dispatch(setProducts(NewProducts));
        return history.push('/fresh');
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
    <form className={styles.form} action="" method="post" onSubmit={submitLogin}>
      <label htmlFor="userName">
        Логин:
        <input id="userName" type="text" name="userName" required value={userName} onChange={controlInputs} />
      </label>
      <label htmlFor="userPassword">
        Пароль:
        <input id="userPassword" type="password" name="userPassword" required value={userPassword} onChange={controlInputs} />
      </label>
      <button type="submit">Войти</button>
      <div className={styles.error}>{error}</div>
    </form>
  );
}

export default Login;
