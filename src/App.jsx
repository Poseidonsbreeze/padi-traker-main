import Navbar from "../src/componenets/Navbar";
import React from 'react'
import WhatIsPediTracker from "./componenets/WhatIsPediTracker";
import WhyItMatters from "./componenets/WhyItMatters";
import Hero from "./componenets/Hero";
import LandingSection from "./componenets/LandingSection";
import Footer from "./componenets/Footer";
import ImageStack from "./componenets/ImageStack";
import FeatureSection from "./componenets/FeatureSection";
import PatientNavigator from "./componenets/PatientNavigator";




function App() {
  return (
    <div>
      <Navbar />
      <main className="">
        <Hero/>
   <WhatIsPediTracker/>
   <WhyItMatters/>
    <PatientNavigator/>
   <FeatureSection/>
   <ImageStack/>
   <LandingSection />
   <Footer/>
      </main>
    </div>
  );
}

export default App;
