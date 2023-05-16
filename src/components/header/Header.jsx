import { Link } from "react-router-dom";
import Logo from '../../assets/logo.svg';
import Profile from '../../assets/identity.svg';
import Icon from '../../assets/icon2.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-logo'>
      <img src={Logo} alt="gymshark logo"/>

      <ul>
        <li>
          <Link to='/'>Browse</Link>
        </li>

        <li>
          <Link to='/Favourties'>Favourites</Link>
        </li>
      </ul>
    
      </div>
      <div className='profile-logo'>
      <img src={Profile} alt="profile page"/>
      </div>
      
    </div>
  )
}

export default Header;