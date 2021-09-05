import React from "react";
import { Modal } from "@material-ui/core";
import './body.css'

function Body(){

  const [loginIsShown, setLoginIsShown] = React.useState(false)

  const getStartedOnClickHandler = () =>{
    console.log("button pressed!")
    setLoginIsShown(true)
  }

  const handleClose = () => {
    setLoginIsShown(false)
  }

  return(
    <div className="Body" style={{marginLeft: 20}}>
        <div style={{display:"inline-block"}}>
          <h1 style={{width: 350, textAlign:"left", position:"relative",
                      marginLeft: 50, top: 20}}>
            Send digital products easily and securely with Smart Contract Technology
          </h1>
          <h4 style={{width: 450, textAlign:"left", position:"relative",
                      marginLeft: 50, top: 30}}>
          Send your digital products to your clients, anywhere, anytime,
            and get your payment securely with Ethereum Blockchain Smart Contract technology 
          </h4>
        </div>
        <div style={{display:"inline-block"}}>
          <button className="GetStartedButton" style={{position:"relative", bottom:100, left:300}} onClick={getStartedOnClickHandler}>
            Send yours, now!
          </button>
        </div>
        {/* {loginIsShown &&         

        } */}
        <Modal open={loginIsShown} onClose={handleClose} 
          BackdropProps={{invisible:true}}>
         <div className="loginDialog" style={{position:"relative", textAlign:"center"}}>
            <h1 className="loginDialogText" style={{position: "relative", width:500, 
                                                    left: "50%", marginLeft: -250, top: 250}}>
              Waiting for confirmation from metamask
            </h1>
          </div>          
        </Modal>


    </div>
  )
}

export default Body;