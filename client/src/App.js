import React from 'react'
import logo from './logo.svg';
import './App.css';
import Body from './body'
import Header from './header'


function App() {
  
  const [respond, setRespond] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((respondData) => setRespond(respondData.message));
  },[])


  return (
    <div style={{textAlign: "center", display: "block"}}>
      <Header/>
      <Body/>
    </div>
  );
}

export default App;
