import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import PhylloSDK from "@/phylloSDKService/phylloSDKInit";
import Navbar from "@/components/Navbar/Navbar";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

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
