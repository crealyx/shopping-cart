import Cart from './components/Cart';
import GameItem from './components/GameItem';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
import GAMES from './games';
function App() {
  const gameItems = GAMES.map((game) => (
    <GameItem
      key={game.id}
      gameTitle={game.name}
      gameImg={game.image}
      price={game.price}
    />
  ));
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <div id="game-item-ctn">{gameItems}</div>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
