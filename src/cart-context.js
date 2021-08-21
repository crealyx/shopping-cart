import React, { useState } from 'react';
const CartContext = React.createContext({
  gamesInCart: [],
  totalAmount: 0,
  totalPrice: 0,
  addGame: () => {},
  updateGames: () => {},
  deleteItem: () => {},
  changeTotalAmount: () => {},
  updateTotalAmount: () => {},
  changePrice: () => {},
  calcTotalPrice: () => {},
});

export function CartContextProvider(props) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [total, setTotal] = useState(0);
  const [games, setGames] = useState([]);

  const totalPriceHandler = () => {
    let calculatedTotal = 0;
    context.gamesInCart.forEach((game) => {
      calculatedTotal += game.total;
    });
    setTotalPrice(calculatedTotal);
  };
  const addGameHandler = (game) => {
    const matchedGame = games.find((cartGame) => cartGame.title === game.title);
    if (matchedGame) {
      matchedGame.amount += game.amount;
      return;
    }
    setGames((prev) => [...prev, game]);
  };
  const changePriceHandler = (game, amount) => {
    const matchedGame = games.find((cartGame) => cartGame.title === game);
    console.log(matchedGame);
    if (matchedGame) {
      matchedGame.amount = amount;
      matchedGame.total = matchedGame.amount * matchedGame.price;
      return;
    }
  };
  const updateGamesHandler = (gameList) => {
    setGames(gameList);
  };
  const totalAmountHandler = (amount) => {
    setTotal((prev) => (prev += amount));
  };
  const deleteItemHandler = (gameItem) => {
    console.log('removed');
    const matchedGame = games.find((cartGame) => cartGame.title === gameItem);
    const newItems = context.gamesInCart.filter(
      (game) => game.title !== matchedGame.title
    );
    console.log(matchedGame);
    context.calcTotalPrice();
    context.updateGames(newItems);
  };
  const updateAmountHandler = () => {
    if (context.gamesInCart.length === 0) {
      setTotal(0);
    } else {
      let calculatedTotal = 0;
      context.gamesInCart.forEach((game) => {
        calculatedTotal += game.amount;
        console.log(calculatedTotal);
      });
      setTotal(calculatedTotal);
    }
  };
  const context = {
    gamesInCart: games,
    totalAmount: total,
    totalPrice: totalPrice,
    setGames: setGames,
    addGame: addGameHandler,
    updateGames: updateGamesHandler,
    deleteItem: deleteItemHandler,
    changeTotalAmount: totalAmountHandler,
    updateTotalAmount: updateAmountHandler,
    changePrice: changePriceHandler,
    calcTotalPrice: totalPriceHandler,
  };

  return (
    <CartContext.Provider value={context}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
