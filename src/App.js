import { useState} from 'react';
import './App.css';
import Form from './components/Form';
import GameDisplay from './components/GameDisplay';

function App() {

  //--------->Establishing the state
  const [game,setGame] = useState(null)


  // Functions
  const getGame = async(searchterm) =>{
    const response = await fetch(`https://zelda.fanapis.com/api/games?name=${searchterm}`)
    const data = await response.json()

    setGame(data);
    console.log(data)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>ZELDA &nbsp; API</h1>
        <p>Here you can look up your favorite Zelda game</p>
        <p>and get information about it such as its release</p>
        <p>console, publisher, and release date.</p>
        <Form gamesearch={getGame} />
        <GameDisplay currentGame={game} />
      </header>
    </div>
  );
}

export default App;
