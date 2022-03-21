import logo from './logo.svg';
import './App.css';
import SignUp from './SignUp.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br/>
        <SignUp />
      </header>
    </div>
  );
}

export default App;
