import { useState } from 'react';
import GameInfo from './GameInfo';

const GameItem = (props) => {
  const [gameInfo, setGameInfo] = useState(false);
  const toggleInfoHandler = (e) => {
    if (
      e.target.classList.contains('overlay-active') ||
      e.target.classList.contains('add-to-cart-btn')
    ) {
      setGameInfo(false);
    } else {
      setGameInfo(true);
    }
  };
  return (
    <div>
      <div onClick={toggleInfoHandler} className="game-item">
        <img src={props.gameImg} alt="game-item" />
        <p className="game-price">BUY - {props.price}$</p>
      </div>
      <GameInfo
        toggleInfo={toggleInfoHandler}
        gameTitle={props.gameTitle}
        price={props.price}
        class={gameInfo ? 'overlay-active' : 'overlay-disabled'}
      ></GameInfo>
    </div>
  );
};

export default GameItem;
