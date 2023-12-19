import React from "react";

const PricingCard = () => {
  return (
    <div className="flex justify-center ">
      <button
        type="button"
        className="focus:outline-none text-white bg-green-800 hover:bg-green-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-800 dark:hover:bg-green-900 dark:focus:ring-green-900"
      >
        Pre-Order
      </button>
    </div>
  );
};

export default PricingCard;
