import React from 'react'

function GameDisplay(props) {
  const loaded = () => {
    return (
      <div>
        <h1>{props.currentGame.data.name}</h1>
        <h2>{props.currentGame.data.developer}</h2>
        <h2>{props.currentGame.data.publisher}</h2>
      </div>
    )
  }

  // return currentMovie && currentMovie.Title ?
}

export default GameDisplay