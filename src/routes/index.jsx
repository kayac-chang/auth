import { Link } from "react-router-dom";

function Route() {
  return (
    <div>
      <ul>
        <li>
          <Link to="login">Login</Link>
        </li>

        <li>
          <Link to="about">About Us</Link>
        </li>
      </ul>
    </div>
  );
}

export default Route;
