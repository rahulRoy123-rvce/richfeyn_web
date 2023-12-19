import React from "react";
import { Collapse } from "antd";

const textOne = [
  "App alerts you when your food items are about to lose its freshness. This helps you consumes food at its best reducing health care costs due to consumption of less fresh food and waste zero food and money spent on it due to expiry .",
  "App helps you purchase just the right quantity of food items so you don't end up overstocking which saves you money and avoids wastage due to expiry of unused items .",
  "App helps you purchase just the right quantity of food items so you don't end up under-stocking or run out of food items, and since you need it urgently you might end up buying from wrong brand/company/s . ",
];
const textTwo = [
  "Grocery list will be prepared based on your available kitchen inventory without any errors. It gives you the freedom to go shopping anywhere anytime without having to plan in advance for grocery shopping. ",
  "It will remind you of existing food items to use when they are about to lose its freshness (expire or come close to use by date) . ",
];
const textThree = [
  "Our containers are also translucent where it can seen if the food is running out but there are close to 100 ingredients in the kitchen are in different quantities and they are consumed at different rates so you have to place order often. With RichFeyn solution, all this is automated meticulously precisely while also reducing the number of shopping trips or orders",
];
const textFour = [
  "When you go out of town, the kitchen items about to expire can be generated on the app for disposal or donation and when you are back, grocery lists will be prepared for you to order such that everything will be restocked at the right time in the right quantity as if you never left town",
];
const textFive = [
  "Each container is powered by 2 AAA batteries and can run for 12 months without replacement. We will send you new batteries for replacement when you are about to run out.",
];
const textSix = [
  "Yes, you can. You can also set your preferences for different sellers, brands and delivery time slots ",
];

const items = [
  {
    key: "1",
    label: <p className="font-bold">How does it save money ?</p>,
    children: (
      <ol>
        {textOne.map((txt) => (
          <li className="font-semibold" key={txt}>{txt}</li>
        ))}
      </ol>
    ),
  },
  {
    key: "2",
    label: (
      <p className="font-bold">
        How does it help me if I prefer shopping offline ?
      </p>
    ),
    children: (
      <ol>
        {textTwo.map((txt) => (
          <li className="font-semibold" key={txt}>{txt}</li>
        ))}
      </ol>
    ),
  },
  {
    key: "3",
    label: (
      <p className="font-bold">
        Why do I need this as I am using transparent containers where I can see
        when the food is running out?
      </p>
    ),
    children: (
      <ol>
        {textThree.map((txt) => (
          <li className="font-semibold" key={txt}>{txt}</li>
        ))}
      </ol>
    ),
  },
  {
    key: "4",
    label: (
      <p className="font-bold">What happens when I travel out of town?</p>
    ),
    children: <p className="font-semibold">{textFour}</p>,
  },
  {
    key: "5",
    label: <p className="font-bold">How are the devices powered?</p>,
    children: <p className="font-semibold">{textFive}</p>,
  },
  {
    key: "6",
    label: (
      <p className="font-bold">
        Can I order different food items from different sellers ?
      </p>
    ),
    children: <p className="font-semibold">{textSix}</p>,
  },
];

const Faqs = () => {
  return (
    <div className="mx-4 md:mx-8 pb-3">
      <h2 className="text-center text-4xl underline font-bold mt-10  mb-3 sm:pb-5">
        FAQs
      </h2>
      <Collapse items={items} />
    </div>
  );
};

export default Faqs;
