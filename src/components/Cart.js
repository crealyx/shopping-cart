import CartItem from './CartItem';
import { useContext } from 'react';
import CartContext from '../cart-context';
import { v4 as uuidv4 } from 'uuid';
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
  return (
    <div id="cart-ctn">
      <div id="cart-item-ctn">{cartItems}</div>
    </div>
  );
};

export default Cart;
