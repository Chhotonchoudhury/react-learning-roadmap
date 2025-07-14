import logo from './logo.svg';
import './App.css';

const favColor = "blue";
const today = new Date().toDateString();
function App() {
 
  return (
     <div>
      <h1>Hello, I’m Chhoton 👋</h1>
      <p>My favorite color is {favColor}</p>
      <p>Today is {today}</p>
      <p>4 * 5 = {4 * 5}</p>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
