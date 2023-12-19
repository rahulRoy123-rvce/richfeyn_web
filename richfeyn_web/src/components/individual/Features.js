import React from "react";
import FeatureCard from "../shared/FeatureCard";
import { Carousel } from "antd";

const Features = () => {
  return (
    <section id="features">
      <h2 className="text-center text-4xl underline font-bold mt-10 mb-3 md:mb-5">
        Features
      </h2>

      <div className="mx-auto mb-8">
        <Carousel
          className="flex justify-center center mx-auto"
          lazyLoad="ondemand"
          rows={1}
          slidesToShow={3}
          slidesToScroll={0}
          dots={false}
          variableWidth={true}
          responsive={[
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
              },
            },
          ]}
        >
          <FeatureCard
            img="/images/Your_inventory.png"
            content="Provides real-time inventory information"
          />
          <FeatureCard
            img="/images/notification_feature.png"
            content="Notifies you of food that is about to expire"
          />
          <FeatureCard
            img="/images/Set_retailer_feature.png"
            content="Set different retailers for different items"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default Features;
