import logo from './logo.svg';
import './App.css';
import NameText from './NameText.js';
import LifeValue from './LifeValue';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NameText name="たろう" />
        <LifeValue name="挑戦" />
        <NameText name="あさひ" />
        <LifeValue name="慈愛" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://atrae.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          入室しましょう！
        </a>
      </header>
    </div>
  );
}

export default App;
