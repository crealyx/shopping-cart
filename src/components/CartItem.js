import { useContext, useEffect, useState } from 'react';
import CartContext from '../cart-context';

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);
  const [amount, setAmount] = useState(props.amount);
  const changeAmountHandler = (e) => {
    const newAmount = Number(e.target.value);
    console.log(newAmount);
    setAmount(newAmount);
    cartCtx.changePrice(props.game, newAmount);
    cartCtx.updateTotalAmount();
  };
  useEffect(() => {
    cartCtx.calcTotalPrice();
  }, [cartCtx]);
  const deleteItemHandler = () => {
    cartCtx.deleteItem(props.game);
  };
  return (
    <div className="cart-item">
      <p className="cart-item-title">{props.game}</p>
      <p className="cart-item-price">Price: {props.price}$</p>
      <p className="cart-item-amount">Amount: {amount}</p>
      <input
        className="amount-input"
        type="number"
        onChange={changeAmountHandler}
        value={amount}
        min="0"
      />
      <button onClick={deleteItemHandler} className="remove-item-btn">
        REMOVE
      </button>
    </div>
  );
};

export default CartItem;
