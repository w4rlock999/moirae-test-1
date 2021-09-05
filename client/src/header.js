import React from 'react'
import './header.css'

function App(){

  const loginOnClickHandler = () => {
    window.location.href = '/dashboard'
  }

  return(
    <div style={{background: "cyan", marginTop:-15}}>
      <h1 style={{display: "inline-block", position: "relative", left: 40, top: 5}}>
        MOIRAE
      </h1>
      <div style={{float:"right", marginRight:40, marginTop: 33}}>
        <button className="menuButton" style={{display: "inline-block", position: "relative"}}>
          How it works?
        </button>
        <button className="menuButton" style={{display: "inline-block", position: "relative", marginLeft: 30}}>
          About
        </button>
        <button className="menuButton" style={{display: "inline-block", position: "relative", marginLeft: 30}}>
          Blog
        </button>
        <button className="menuButton" style={{display: "inline-block", position: "relative", marginLeft: 30}}>
          Contact
        </button>
        <button className="loginButton2" style={{display: "inline-block", position: "relative", marginLeft: 40}}
          onClick={loginOnClickHandler}>
          Login
        </button>
      </div>




    </div>
  )
}

export default App;