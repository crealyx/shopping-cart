import { useContext, useEffect } from 'react';
import CartContext from '../cart-context';
const Checkout = (props) => {
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    cartCtx.setGames([]);
    cartCtx.updateTotalAmount();
  }, []);
  return (
    <div className={props.className}>
      <h1>Thanks for choosing CTEAM, Enjoy your purchase!</h1>
    </div>
  );
};

export default Checkout;
