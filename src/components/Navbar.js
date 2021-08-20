import { NavLink } from 'react-router-dom';

import CartButton from './CartButton';
const Navbar = () => {
  return (
    <nav>
      <ul id="navbar">
        <NavLink to="/" id="home-button">
          HOME
        </NavLink>
        <NavLink to="/cart">
          <CartButton />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
