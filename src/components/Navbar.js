import { NavLink } from 'react-router-dom';
import CartButton from './CartButton';
import logo from '../img/cteam.png';
const Navbar = () => {
  return (
    <nav>
      <ul id="navbar">
        <img src={logo} alt="logo" />
        <NavLink to="/" className="home-button">
          Games
        </NavLink>
        <NavLink to="/cart">
          <CartButton />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
