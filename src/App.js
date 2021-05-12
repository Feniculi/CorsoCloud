import logo from './logo.svg';
import './assets/app.scss';
import { Chat } from './components/Chat';

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      <Chat />
    </div>
  )
}

export default App;
