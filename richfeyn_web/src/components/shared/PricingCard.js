import React, { useState } from "react";
import { Card, Typography, Button, Col, Row } from "antd";

import PopUp from "./popup";




const { Text, Title } = Typography;

const PricingCard = ({ data, id }) => {
  const [showPopUp, setShowPopUp] = useState(false);

  const handleOption1 = () => {
    const a=data.but;
    window.open(a, '_blank');
  };

  const handleOption2 = () => {
    const b=data.instamojo;
    window.open(b, '_blank');
  };

  const handleClose = () => {
    setShowPopUp(false);
  };
  return (
    <Card
      
      id={id}
      title={data.months}
      className="text-center text-lg w-full mx-5 max-w-sm shadow-xl "
    >
      {/* <p className="mb-2"> */}
        
       <div className="flex flex-col mx-auto">
        
        <div className="flex mx-auto flex-row">
        
        <Text className="mt-3 mx-auto text-2xl">{`${data.currency}`}</Text>
        <Text className="font-normal  text-6xl">{`${data.price}`}</Text>
        </div>
        <Text className="font-medium text-gray-500 text-2xl">{`${data.quantity}`}</Text>
        </div> 
        <Text className="font-bold text-xl">{`${data.pricePerMonth}`}</Text>
      {/* </p> */}
      <p className="mb-2">
        
      </p>
      <p className=" mt-5 mb-3 tracking-wide v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor " >{data.jar}</Text>
      </p>
      <p className="tracking-wide mb-3 v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor ">{data.t1}</Text>
      </p>
      <p className=" tracking-wide mb-3 v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor">{data.t2}</Text>
      </p>
      <p className="tracking-wide mb-3 v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor ">{data.t3}</Text>
      </p>
      <p className="tracking-wide mb-3 v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor ">{data.t4}</Text>
      </p>
      <p className="tracking-wide mb-3 v-screen flex items-center justify-center">
        <Text className="text-sm text-tcolor ">{data.t5}</Text>
      </p>
      <p className="tracking-wide mb-3 v-screen flex items-center justify-center ">
        <Text className="text-sm text-tcolor ">{data.t6}</Text>
      </p>
      <Row gutter={16}>
        <Col xs={24}>
          <Button onClick={() => setShowPopUp(true)}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white bg-[#236d3b] rounded shadow-md fold-bold focus:outline-none"
            style={{
              outline: "none",
              color: "white",
              borderBottom: "none",
              borderColor: "transparent",
            }}
          >
            Pre order
          </Button>
          <PopUp
            show={showPopUp}
            handleOption1={handleOption1}
            handleOption2={handleOption2}
            handleClose={handleClose}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default PricingCard;
