import Friends from "./components/friends";
import "./App.css";
function App() {
  return (
    <div className="App">
      <h1> ❤️ Friends ❤️ </h1>
      <h3> (Names are fetched from Express Restful API) </h3>
      <div className="Friendlist">
        <Friends />
      </div>
    </div>
  );
}

export default App;
