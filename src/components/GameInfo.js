import { useRef, useContext, useState } from 'react';
import CartContext from '../cart-context';
const GameInfo = (props) => {
  const cartCtx = useContext(CartContext);
  const gameAmount = useRef(0);
  const [total, setTotal] = useState(props.price);
  const addToCartHandler = () => {
    const totalAmount = Number(gameAmount.current.value);
    const currentGame = {
      title: props.gameTitle,
      price: props.price,
      amount: totalAmount,
      total: total,
    };
    cartCtx.addGame(currentGame);
    cartCtx.changeTotalAmount(totalAmount);
  };
  const totalPriceHandler = () => {
    setTotal(gameAmount.current.value * props.price);
  };
  return (
    <div className={props.class} onClick={props.toggleInfo}>
      <div className="game-info">
        <p className="game-info-title">{props.gameTitle}</p>
        <p className="game-info-price">{props.price} $</p>
        <p>Amount:</p>
        <input
          type="number"
          ref={gameAmount}
          defaultValue="1"
          onChange={totalPriceHandler}
        />
        <p>Total Price:{total}$</p>
        <button className="add-to-cart-btn" onClick={addToCartHandler}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default GameInfo;
