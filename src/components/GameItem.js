import placeholder from '../img/placeholder.png';

const GameItem = () => {
  return (
    <div className="game-item">
      <p>Game Title</p>
      <img src={placeholder} alt="placeholder" />
      <p>Price: 0.00$</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default GameItem;
