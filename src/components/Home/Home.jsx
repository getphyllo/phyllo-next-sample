import React from "react";
import Navbar from "../Navbar/Navbar";
import PhylloSDK from "../../phylloSDKService/phylloSDKInit";
import "./Home.css";

const Home = () => {
  const phylloSDK = new PhylloSDK();

  const handleGetStarted = async () => {
    await phylloSDK.openPhylloSDK();
  };

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <h1>Get Started With Phyllo</h1>
        <button className="home-button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
