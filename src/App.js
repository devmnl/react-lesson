import logo from './logo-m.png';
import './App.css';
import Header from './Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <header className="App-header">

    
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/devmnl"
          target="_blank"
          rel="noopener noreferrer"
        >
          DevMnL
        </a>
        <p>Manoel Franco</p>
        
      </header>
    </div>
  );
}





export default App;
