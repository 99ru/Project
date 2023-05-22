import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Profile from "../../assets/identity.svg";
import Favorite from "../../assets/fav.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <Link to="/">
        <img src={Logo} alt="gymshark logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/planner">Planner</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
      <div className="profile-logo">
      <Link to="/favorite">
      <img src={Favorite} alt="profile page" />
      </Link>
      </div>

    </div>
  );
};

export default Header;
