import React from 'react'
import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Landing from './Landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  
  const [respond, setRespond] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((respondData) => setRespond(respondData.message));
  },[])


  return (
    <div style={{display: "block"}}>

      <Router>
        <Switch>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
