import './App.css';
import { useState } from 'react';
import Form from './components/Form';
import GameDisplay from './components/GameDisplay';

function App() {
  const [game, setGame] = useState(null)

  // Functions
  const getGame = async(term) =>{
    const response = await fetch(`https://zelda.fanapis.com/api/games?name=${term}`)
    const data = await response.json()

    setGame(data);
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ZELDA API</h1>
        <Form gameselect={getGame} />
        <GameDisplay currentGame={game}/>
      </header>
    </div>
  );
}

export default App;
