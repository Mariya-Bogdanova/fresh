import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import Login from '../Login';
import Signup from '../SignUp';
import fresh from './fresh.png';

function Home() {
  const [inputs, setinputs] = useState({
    loginInput: false,
    signupInput: false,
    login: true,
    signup: true,
  });

  function beginToLogin(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setinputs({
      ...inputs,
      [name]: !value,
      login: !inputs.login,
      signup: !inputs.signup,
    });
  }

  function goBack() {
    setinputs({
      ...inputs,
      loginInput: false,
      signupInput: false,
      login: true,
      signup: true,
    });
  }
  return (
    <>
      <div className={styles.home}>
        <img
          src={fresh}
          alt=""
          style={{
            width: '200px', position: 'absolute', left: '26%', top: '48%',
          }}
        />
        <div className={styles.login}>
          {inputs.login && <Link to="/login" name="loginInput" onClick={beginToLogin}>ВОЙТИ</Link>}
          {inputs.loginInput && (
          <>
            <Login />
            <button className={styles.goBack} onClick={goBack} type="button">Назад</button>
          </>
          )}

          {inputs.signup && <Link to="/signup" name="signupInput" onClick={beginToLogin}> ЗАРЕГИСТРИРОВАТЬСЯ</Link>}
          {inputs.signupInput && (
          <>
            <Signup />
            <button className={styles.goBack} onClick={goBack} type="button">Назад</button>
          </>
          )}
        </div>
      </div>
      ;
    </>
  );
}

export default Home;
