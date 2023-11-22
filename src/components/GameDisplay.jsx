import React from 'react'

function GameDisplay(props) {
  const loaded = () => {
    return (
      <div>
        <h1>{props.currentGame.name}</h1>
        <h2>{props.currentGame.developer}</h2>
        <h2>{props.currentGame.publisher}</h2>
      </div>
    )
  }
  //function to return loading JSX
  const loading = () => {
    return <h1>No Title to Display</h1>;
  };
  return props.game ? loaded() : loading();
};
  // return currentMovie && currentMovie.Title ?

export default GameDisplay