import { Link } from 'react-router-dom';
import './index.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1> 404 Page Not Found </h1>
      <p> The page you are looking for is not found </p>
      <Link to="/">
        <button className="notfound-button" type="button">
          Get back to home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
