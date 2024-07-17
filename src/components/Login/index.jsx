import { useState } from "react";
import Cookies from "js-cookie";
import "./index.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  const authenticateUser = async (event) => {
    event.preventDefault();
    const credentials = { username: userName, password };
    setUserName("");
    setPassword("");
    const options = {
      method: "POST",
      body: JSON.stringify(credentials),
    };
    try {
      const response = await fetch("https://apis.ccbp.in/login", options);
      const data = await response.json();
      if (response.ok) {
        Cookies.set("jwt_token", data.jwt_token);
      } else {
        setStatus(response.status);
        setMessage(response.statusText);
      }
    } catch (error) {
      console.log("LoginAPI: " + error);
    }
  };

  const renderError = (status, message) => {
    return <p> {`${status} ${message}`} </p>;
  };

  return (
    <div className="login-form-container">
      <form className="login-form" onSubmit={authenticateUser}>
        <div>
          <label htmlFor="UserName" className="input-label">
            UserName
          </label>
          <input
            id="UserName"
            className="input-form"
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="Password" className="input-label">
            Password
          </label>
          <input
            id="Password"
            className="input-form"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {renderError(status, message)}
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
