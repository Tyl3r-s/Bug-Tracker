import LandingLogo from '../assets/images/landingLogo.jpg';
import React from "react";
import Auth from '../utils/auth';

const Home = () => {
  if (Auth.loggedIn()) {
  return (
    <main>
      <div className="LandingContainer">
        <div className="divContainer">
          <img
            src={LandingLogo}
            className="LandingLogo"
            alt="landing page logo"
          ></img>
          <p className="LandingText">
            
          </p>
          <div className="btnContainer1">
            <a href="/Profile" className="inputBoxBtn landing-btn">
              Account
            </a>
          </div>
        </div>
      </div>
    </main>
  )} else {
    return (
      <main>
      <div className="LandingContainer">
        <div className="divContainer">
          <img
            src={LandingLogo}
            className="LandingLogo"
            alt="landing page logo"
          ></img>
          <p className="LandingText">
            
          </p>
          <div className="btn-container-1">
            <a href="/SignUp" className="inputBoxBtn five-margin landing-btn">
              Signup
            </a>
            <a href="/Login" className="inputBoxBtn five-margin landing-btn">
              Login
            </a>
          </div>
        </div>
      </div>
    </main>
    )
  }
};

  export default Home;