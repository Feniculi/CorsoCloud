import logo from './logo.svg';
import './assets/app.scss';
import { Chat } from './components/Chat';

function App() {
  return (
    <div className="app">
      <div>
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        </header>
        <header className="header header2">
          <img src={logo} className="logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
        </header>
      </div>

      <Chat />
    </div>
  )
}

export default App;
