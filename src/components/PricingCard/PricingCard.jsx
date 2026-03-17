import React from "react";
import PricingFeature from "../PricingFeature/PricingFeature";

const PricingCard = ({ data }) => {
  const { name, price, description, features } = data;
  return (
    <div className="border-2 p-5 rounded-2xl text-center bg-gray-900 space-y-2 flex flex-col">
      <h3 className="text-xl">{name}</h3>
      <h4>{price}</h4>
      <p className="bg-gray-950 rounded-sm p-2">{description}</p>
      <div className="flex-1">
        {features.map((feature, index) => (
          <PricingFeature key={index} feature={feature}></PricingFeature>
        ))}
      </div>
      <button className="btn btn-success w-full mt-5">Buy Now</button>
    </div>
  );
};

export default PricingCard;
