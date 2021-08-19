import React from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  
  const [respond, setRespond] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((respondData) => setRespond(respondData.message));
  },[])


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
          respond: {respond}
        </a>
      </header>
    </div>
  );
}

export default App;
