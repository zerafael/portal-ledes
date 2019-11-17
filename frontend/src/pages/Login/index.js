import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import logo from '../../assets/logo.jpg';

import { loginRequest } from '../../store/modules/auth/actions';

function Login() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin(event) {
    dispatch(loginRequest(email, password));
    event.preventDefault();
  }

  return (
    <>
      <img src={logo} alt="Logo Ledes" />

      <form onSubmit={handleLogin}>
        <input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          onChange={handleEmailChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Sua senha"
          onChange={handlePasswordChange}
        />

        <input className="button" type="submit" value="Acessar" />
      </form>
    </>
  );
}

export default Login;
