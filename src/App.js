import Cart from './components/Cart';
import GameItem from './components/GameItem';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact>
          <div id="game-item-cnt">
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
            <GameItem></GameItem>
          </div>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
