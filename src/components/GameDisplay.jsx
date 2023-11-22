function GameDisplay(props) {
  const loaded = () => {
    return (
      <div>
        <h1>Name: {props.currentGame.Title}</h1>
        <img src={props.currentGame.Poster}/>
        <h2>Rated: {props.currentGame.Rated} </h2>
        <h2>Released: {props.currentGame.Released}</h2>
        <h2>Runtime: {props.currentGame.Runtime}</h2>
      </div>
    )
  }
  //function to return loading JSX
  const loading = () => {
    return <h1>No Title to Display</h1>;
  };
  return props.currentGame ? loaded() : loading();
};
  // return currentMovie && currentMovie.Title ?

export default GameDisplay