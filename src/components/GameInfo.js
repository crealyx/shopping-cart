import { useRef, useState } from 'react';

const GameInfo = (props) => {
  const gameAmount = useRef(0);
  const [total, setTotal] = useState(props.price);
  const addToCartHandler = () => {
    console.log(props.gameTitle);
    console.log(total);
  };
  const totalAmountHandler = () => {
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
          onChange={totalAmountHandler}
        />
        <p>Total Price:{total}</p>
        <button onClick={addToCartHandler}>Add to Cart</button>
      </div>
    </div>
  );
};
export default GameInfo;
