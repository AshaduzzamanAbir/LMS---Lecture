import React from "react";
import { assets } from "../../assets/assets";

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center space-y-2">
      <p className="text-md">Trusted by learners from</p>
      <div className="flex items-center flex-wrap gap-4 gap-y-4 justify-center space-x-10 mt-6 px-4 mx-auto">
        <img src={assets.microsoft_logo} alt="Microsoft" />
        <img src={assets.walmart_logo} alt="Walmart" />
        <img src={assets.accenture_logo} alt="Accenture" />
        <img src={assets.adobe_logo} alt="Adobe" />
        <img src={assets.paypal_logo} alt="PayPal" />
      </div>
    </div>
  );
};

export default Companies;
