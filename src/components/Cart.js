import CartItem from './CartItem';
import { useContext, useEffect } from 'react';
import CartContext from '../cart-context';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
const Cart = () => {
  const cartCtx = useContext(CartContext);
  const cartItems = cartCtx.gamesInCart.map((game) => (
    <CartItem
      key={uuidv4()}
      game={game.title}
      price={game.price}
      amount={game.amount}
    />
  ));
  useEffect(() => {
    cartCtx.calcTotalPrice();
    cartCtx.updateTotalAmount();
  }, [cartCtx]);

  return (
    <div id="cart-ctn">
      <div id="cart-item-ctn">
        <p id="cart-text">CART</p>
        {cartItems}
        <p id="total">
          Total Price:
          {cartCtx.totalPrice}$
        </p>
        <NavLink id="checkout-btn" to="/checkout">
          CHECKOUT
        </NavLink>
      </div>
    </div>
  );
};

export default Cart;
