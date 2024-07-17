import { useState } from 'react';
import Cookies from 'js-cookie';
import './index.css';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');

  const authenticateUser = async (event) => {
    event.preventDefault();
    const credentials = { username: userName, password };
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    };
    try {
      const response = await fetch('https://apis.ccbp.in/login', options);
      const data = await response.json();
      if (response.ok) {
        Cookies.set('jwt_token', data.jwt_token);
        setMessage('Logged in Sucesssfully');
        setUserName('');
        setPassword('');
      } else {
        setMessage('Authentication failure');
      }
    } catch (error) {
      console.log('LoginAPI: ' + error);
    }
  };

  const renderError = (message) => {
    const varClassName =
      message === 'Logged in Sucesssfully'
        ? 'success-message'
        : 'error-message';
    return <p className={varClassName}> {message} </p>;
  };

  const onClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-form-container">
      <h1 className="login-heading">Login to Restaurant App</h1>
      <form className="login-form" onSubmit={authenticateUser}>
        <div className="input-container">
          <label htmlFor="UserName" className="input-label">
            User Name
          </label>
          <input
            id="UserName"
            className="input-form"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="Password" className="input-label">
            Password
          </label>
          <div className="password-container">
            <input
              id="Password"
              className="input-form"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <button
              type="button"
              onClick={onClickShowPassword}
              className="show-password"
            >
              {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
            </button>
          </div>
        </div>
        {renderError(message)}
        <div className="buttton-container">
          <button className="submit-button" type="submit">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
