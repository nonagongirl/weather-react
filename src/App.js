import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>I am a power ranger.</p>
        <a
          className="App-link"
          href="https://instagram.com/stephaniejay_uk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do I understand React and NPM?
        </a>
      </header>
    </div>
  );
}

export default App;
