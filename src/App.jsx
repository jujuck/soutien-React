import "./App.css";
import joke from "./assets/data";
import Joke from "./components/Joke";
function App() {
  console.log(joke);
  return (
    <div className="container">
      <h1>My App, chuck Norris Joke</h1>
      {/** Appeler un composant Joke */}

      <Joke joke={joke} />
      <Joke joke={joke} />
      <Joke joke={joke} />
    </div>
  );
}

export default App;

/**
 *
 * const sum = (a, b) => {
 *
 *  return a +b
 * }
 *
 * sum(6, 5)
 *
 */
