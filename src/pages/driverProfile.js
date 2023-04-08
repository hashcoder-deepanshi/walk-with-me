import React from "react";
import './Profile.css';

export default function driverProfile(){
    return(
        <div className="profile_container d-flex justify-content-center align-items-center">
             
             <div className="profile_card">

              <div className="profile-image"> 
                <img src="https://i.imgur.com/JgYD2nQ.jpg" alt="personal pic"/> 
                <div className="profile-text">
                  <h1 className="mb-0">Ms. Deepanshi Chourasia</h1>
                  <span className="text-muted d-block mb-2">Delhi , India</span><br/>

                  {/* <button className="btn btn-primary btn-sm follow">Follow</button> */}
                </div>             
              </div>
              <div className="profile-info">

                  <div className="profile-stats">
                    <h1 className="mb-0">Vehicle No.:</h1>
                    <span>Electric Vehicle</span>
                  </div>
                  <div className="profile-stats">
                    <h1 className="mb-0">Document status:</h1>
                    <span>Up to date</span>
                  </div>
                  <div className="stats">
                    <h1 className="mb-0">e-mail:</h1>
                    <span>deepanshi@gmail.com</span>
                    {/* <span><CheckCircleOutlineIcon fontSize="large"/></span> */}
                  </div>
              </div>
              </div>

           </div>
    )
}