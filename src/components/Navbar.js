import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';
import logo from '../img/cteam.png';
const Navbar = () => {
  return (
    <nav>
      <ul id="navbar">
        <img src={logo} alt="logo" />
        <div className="button-ctn">
          <NavLink to="/" id="home-button">
            HOME
          </NavLink>
          <NavLink to="/cart">
            <CartButton />
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
