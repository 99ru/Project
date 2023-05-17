import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import Profile from "../../assets/identity.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">
        <img src={Logo} alt="gymshark logo" />
        <ul>
          <li>
            <Link to="/">Browse</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
      <div className="profile-logo">
      <Link to="/profile">
      <img src={Profile} alt="profile page" />
      </Link>
       
      </div>
    </div>
  );
};

export default Header;
