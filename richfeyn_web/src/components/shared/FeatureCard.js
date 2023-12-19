import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="min-w-[200px] w-[100vw] md:w-auto justify-center items-center flex flex-col text-center p-4 space-y-3">
      <img
        loading="lazy"
        className="w-[50vw] md:w-[30vw] max-w-[300px] min-w-[100px] mx-auto"
        src={props.img}
        alt=""
      />
      <span className="text-center text-sm font-bold md:text-xl px-3">
        {props.content}
      </span>
    </div>
  );
};

export default FeatureCard;
