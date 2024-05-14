import { useState } from "react";

function Joke({ joke }) {
  /** Ma partie en Javascript */

  const [count, setCount] = useState(0);
  const [newJoke, setNewJoke] = useState(joke);

  const handleButtonClick = () => {
    /** on increment count */
    setCount((prevCount) => prevCount + 1);
    fetch("https://api.chucknorris.io/jokes/random", { method: "GET" })
      .then((response) => response.json())
      .then((data) => setNewJoke(data));
    /** aller chercher une nouvelle blague et l'afficher */
  };

  /** ma partie rendu visuel */
  return (
    <div>
      <a href={newJoke.icon_url}>Clic ici</a>
      <img src={newJoke.icon_url} />
      <p>{newJoke.value}</p>
      <button onClick={handleButtonClick}>bouton</button>
      <p>{count}</p>
    </div>
  );
}

export default Joke;

/**
 * element.addEventListener("click", function
 */
