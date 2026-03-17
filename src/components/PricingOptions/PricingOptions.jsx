import React, { Suspense, use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const PricingOptions = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <div>
      <h3 className="text-2xl font-bold text-center my-5">Get Our Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-5">
        {pricingData.map((data) => (
          <PricingCard data={data} key={data.id}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOptions;
