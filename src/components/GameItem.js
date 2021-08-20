const GameItem = (props) => {
  return (
    <div className="game-item">
      <img src={props.gameImg} alt="game-item" />
      <p className="game-price">BUY - {props.price}$</p>
    </div>
  );
};

export default GameItem;
