import React from "react";

import Coursel from '../inc/Coursel';
import Banner from '../components/Banner';
import Alert from '../components/Alert';
import Footer from "../inc/Footer";
import WelcomeText from "./WelcomeText";
import CoreProducts from "./CoreProducts";
import ContacEmail from  "./ContacEmail";


const Home = () => {
  return (
    
      <div>
        <Banner />
        <Alert />
        < Coursel />
        <WelcomeText />
        <CoreProducts />
        <ContacEmail />
        <Footer />
      </div>
                
    
  );
};

export default Home;
