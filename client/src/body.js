import React from "react";
import './body.css'

function Body(){


  const [textState, setTextState] = React.useState("Write message here")

  const textOnChangeHandler = (event) => {
    setTextState(event.target.value)
  }

  const submitOnClickHandler = () => {
    console.log(textState)
  }

  return(
    <div className="Body">
      <div style={{display:"inline-block"}}>
        <h1 style={{width: 350, textAlign:"left", position:"relative",
                    right: 300, top: 20}}>
          Send digital products easily and securely with Smart Contract Technology
        </h1>
        <h4 style={{width: 450, textAlign:"left", position:"relative",
                    right: 300, top: 30}}>
        Send your digital products to your clients, anywhere, anytime,
         and get your payment securely with Ethereum Blockchain Smart Contract technology 
        </h4>
      </div>
      <div style={{display:"inline-block"}}>
        <button style={{position:"relative", bottom:100, left:120}}>
          Send yours, now!
        </button>
      </div>
    </div>
  )
}

export default Body;