import React, { useState } from 'react';
const CartContext = React.createContext({
  gamesInCart: [],
  totalAmount: 0,
  addGame: () => {},
  changeTotalAmount: () => {},
});

export function CartContextProvider(props) {
  const [total, setTotal] = useState(0);
  const [games, setGames] = useState([]);
  const addGameHandler = (game) => {
    const matchedGame = games.find((cartGame) => cartGame.title === game.title);
    console.log(matchedGame);
    if (matchedGame) {
      matchedGame.amount += game.amount;
      return;
    }
    setGames((prev) => [...prev, game]);
  };
  const totalAmountHandler = (total) => {
    setTotal((prev) => (prev += total));
  };
  const context = {
    gamesInCart: games,
    totalAmount: total,
    addGame: addGameHandler,
    changeTotalAmount: totalAmountHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
