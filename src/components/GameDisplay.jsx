import React from "react"

function GameDisplay(props) {
    const loaded = () => {
        return (
            <div>
                <h1>{props.currentGame.name}</h1>
                <h2>{props.currentGame.description}</h2>
                <h2>{props.currentGame.publisher}</h2>
            </div>
        )
    }
    const loading = () => {
        return <h1>Buffering...</h1>
    }
}

export default GameDisplay
