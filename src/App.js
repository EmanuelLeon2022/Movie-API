import { useState} from 'react';
import './App.css';
import Form from './components/Form';
import GameDisplay from './components/GameDisplay';

function App() {

  //--------->Establishing the state
  const [game,setGame] = useState(null)


  // Functions
  const getGame = async(searchterm) =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=8d93c8f5&t=${searchterm}`)
    const dot = await response.json()

    setGame(dot);
    console.log(dot)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie API</h1>
        <p>Here you can look up your favorite movie and get</p>
        <p>the info about its release year, ratings, and its run time.</p>
        <Form gamesearch={getGame} />
        <GameDisplay currentGame={game} />
      </header>
    </div>
  );
}

export default App;