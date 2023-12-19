import React from "react";
import { Typography, Avatar } from "antd";

const RoundedCards = ({ profile, title, subtitle,num ,size}) => {
  const { Title } = Typography;
  return (
    <div className="flex flex-col justify-start items-center rounded-lg bg-slate-200 shadow-lg p-4 md:max-w-lg min-h-full">
      <Avatar className="my-4" src=<svg xmlns={profile}  viewBox={size}><path fill="black" d={num}/></svg> size={64} shape="square" />
      <Title className="font-bold" level={4}>{title}</Title>
      <span className="text-center text-lg md:text-base font-bold">{subtitle}</span>
    </div>
  );
};

export default RoundedCards;
