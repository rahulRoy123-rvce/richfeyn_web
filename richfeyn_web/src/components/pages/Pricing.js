import PricingCard from "../shared/PricingCard";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const jsonData = {
  us: [
    {
      months: "6 months",
      price: "120",
      quantity: "for 5 Jars",
      currency: "$",
      pricePerMonth: "($20/month)",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "12 months",
      price: "216",
      quantity: "for 12 Jars",
      currency: "$",
      pricePerMonth: "($18/month)",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "3 months",
      price: "90",
      quantity: "for 4 Jars",
      currency: "$",
      pricePerMonth: "($30/month)",
      jar: "After 1 year, subscription fee is $1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  ind: [
    {
      months: "6 months",
      price: "10,000",
      quantity: "for 5 Jars",
      currency: "₹",
      pricePerMonth: "(₹1666/month)",
      jar: "After 1 year, subscription fee is ₹83/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "12 months",
      price: "18,000",
      quantity: "for 12 Jars",
      currency: "₹",
      pricePerMonth: "(₹1500/month)",
      jar: "After 1 year, subscription fee is ₹83/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "3 months",
      price: "7,500",
      quantity: "for 4 Jars",
      currency: "₹",
      pricePerMonth: "(₹2500/month)",
      jar: "After 1 year, subscription fee is ₹83/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  ca: [
    {
      months: "6 months",
      price: "168",
      quantity: "for 5 Jars",
      currency: "C$",
      pricePerMonth: "(C$28/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "12 months",
      price: "300",
      quantity: "for 12 Jars",
      currency: "C$",
      pricePerMonth: "(C$25/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "3 months",
      price: "126",
      quantity: "for 4 Jars",
      currency: "C$",
      pricePerMonth: "(C$42/month)",
      jar: "After 1 year, subscription fee is C$1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  eu: [
    {
      months: "6 months",
      price: "114",
      quantity: "for 5 Jars",
      currency: "€",
      pricePerMonth: "(€19/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "12 months",
      price: "204",
      quantity: "for 12 Jars",
      currency: "€",
      pricePerMonth: "(€17/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "3 months",
      price: "84",
      quantity: "for 4 Jars",
      currency: "€",
      pricePerMonth: "(€28/month)",
      jar: "After 1 year, subscription fee is €1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
  gbp: [
    {
      months: "6 months",
      price: "96",
      quantity: "for 5 Jars",
      currency: "£",
      pricePerMonth: "(£16/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/28o03ZgLl958em4dR0",
      instamojo: "https://imjo.in/TxVgHF",
    },
    {
      months: "12 months",
      price: "180",
      quantity: "for 12 Jars",
      currency: "£",
      pricePerMonth: "(£15/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/5kA7wreDd5SW1zicMR",
      instamojo: "https://imjo.in/xMx39T",
    },
    {
      months: "3 months",
      price: "72",
      quantity: "for 4 Jars",
      currency: "£",
      pricePerMonth: "(£24/month)",
      jar: "After 1 year, subscription fee is £1/month",
      t1: "Free delivery on all orders",
      t2: "Unlimited number of orders",
      t3: "No mark up on store price",
      t4: "Any retailer",
      t5: "Any product",
      t6: "No Minimum Order",
      but: "https://buy.stripe.com/8wM6snbr1chk2Dm6ox",
      instamojo: "https://imjo.in/SMs3s6",
    },
  ],
};

const Pricing = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("us");

  const getGeoInfo = () => {
    axios
      .get("https://ipapi.co/json/")
      .then((response) => {
        let data = response.data;
        let country =
          data.country_name === "Canada"
            ? "ca"
            : data.country_name === "India"
              ? "ind"
              : "us";

        setSelectedCurrency(country);
        console.log(data.country_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getGeoInfo();
  }, []);

  return (
    <>
      <h2 className="text-center text-4xl underline font-bold mt-6  mb-3 sm:pb-5">
        Pricing
      </h2>
      <h3 className="text-center font-semibold md:text-xl mb-6">Bombay Shaving Customers with coupon code <Link to="/contact"
        className="font-medium text-blue-600 dark:text-blue-500 underline cursor-pointer">click here</Link> to avail the offer</h3>
      <div className="grid justify-items-center grid-cols-1 md:flex md:flex-wrap md:justify-center xl:grid-cols-3 xl:grid max-w-7xl mb-10 gap-7 mx-5 md:mx-auto">
        {jsonData[selectedCurrency].map((data, index) => (
          <PricingCard id={index} data={data} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
