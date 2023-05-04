import Logo from '../../assets/logo.svg';
import Profile from '../../assets/identity.svg';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-logo'>
      <img src={Logo} alt="gymshark logo"/>
      </div>
      <div className='profile-logo'>
      <img src={Profile} alt="profile page"/>
      </div>
      
    </div>
  )
}

export default Header;