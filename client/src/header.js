import React from 'react'
import './header.css'

function App(){
  return(
    <div style={{background: "cyan", marginTop:-15}}>
      <h1 style={{display: "inline-block", position: "relative", left:-100, marginRight: 500}}>
        moirae
      </h1>
      <button className="menuButton" style={{display: "inline-block", position: "relative", marginLeft: 30}}>
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
      <button style={{display: "inline-block", position: "relative", marginLeft: 50}}>
        Login
      </button>




    </div>
  )
}

export default App;