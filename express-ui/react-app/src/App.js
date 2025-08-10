
import logo from './logo.svg';
import './App.css';
import LogoPublic from './LogoPublic';
import GarudaImage from './GarudaImage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{marginTop: 32}}>
          <LogoPublic />
          <div style={{fontSize: 12, color: '#888'}}>Asset diambil dari /public/images/logo.png (Express)</div>
        </div>
        <div style={{marginTop: 32}}>
          <GarudaImage />
          <div style={{fontSize: 12, color: '#888'}}>Gambar diambil dari /public/garuda.jpeg (Express)</div>
        </div>
      </header>
    </div>
  );
}

export default App;
