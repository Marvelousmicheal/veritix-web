// import SignUpForm from '../components/forms/SignUpForm';
// import SignInForm from '../components/forms/SignInForm';

import BottomBanner from "../components/BottomBanner";
import HowItWorksSection from "../components/HowItWorks";

import React from "react";
import TrendingEvent from "../components/TrendingEvent";

function Home() {
  return (
    <div className="flex flex-col relative w-full bg-transparent ">
      <div className="mx-auto w-full">
        <h1 className="mb-4 text-3xl font-bold text-gray-800">
          Welcome to Our Website
        </h1>
        <img src="/Images/Vector.svg" className="absolute -top-52 right-0" />
        <TrendingEvent />
        <HowItWorksSection />
        <BottomBanner />

        {/* <SignInForm /> */}
        {/* <SignUpForm /> */}
      </div>
    </div>
  );
}

export default Home;
