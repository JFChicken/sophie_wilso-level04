import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple list of galleries <code>JC-Photograph</code>.
        </p>
        <a
          className="App-link"
          href="/gallery"
          target="_self"
          rel="noopener noreferrer"
        >
          View gallery - demo photos
        </a>
      </header>
    </div>
  );
}

export default App;
