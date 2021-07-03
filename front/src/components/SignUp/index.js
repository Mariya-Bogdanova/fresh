import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import styles from './SignUp.module.scss';

function Signup() {
  const history = useHistory();
  const [inputs, setInputs] = useState({
    userName: '',
    userPassword: '',
  });
  const { userName, userPassword } = inputs;
  const [error, setError] = useState(false);

  async function submitSignup(event) {
    try {
      event.preventDefault();
      const response = await axios.post('/auth/signup', { userName, userPassword });
      if (response.status === 200) {
        return history.push('/');
      }
    } catch {
      setError('Пользователь с таким логином уже существует');
    }
    return setError('Пользователь с таким логином уже существует');
  }

  function controlInputs({ target: { name, value } }) {
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  return (
    <form className={styles.form} action="" method="post" onSubmit={submitSignup}>
      <label htmlFor="userName">
        Логин:
        <input id="userName" type="text" name="userName" required value={userName} onChange={controlInputs} />
      </label>
      <label htmlFor="userPassword">
        Пароль:
        <input id="userPassword" type="password" name="userPassword" required value={userPassword} onChange={controlInputs} />
      </label>
      <button type="submit">Зарегистрироваться</button>
      <div className="error">{error}</div>
    </form>
  );
}

export default Signup;
