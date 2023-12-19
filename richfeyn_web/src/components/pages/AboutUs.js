import React, { useEffect, useState } from "react";
import Banner from "../individual/Banner";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <>
        {!isReadMore && text}
        <span
          onClick={toggleReadMore}
          className={
            isReadMore
              ? "text-red-white font-bold float-right "
              : "text-red-white font-bold"
          }
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      </>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {/* <h2
        id="about"
        className="text-white text-center text-4xl underline font-bold mt-10  mb-3 sm:pb-5"
      >
        About Us
      </h2>
      <p className="text-white mx-5 md:mx-16 lg:my-5 text-base md:text-xl font-semibold italic text-center">
        Where innovation meets everyday living, and where your convenience is
        our passion. Together, let's redefine what's possible and shape a future
        of limitless potential.
      </p>
      <div className="text-white flex flex-col-reverse lg:flex-row mx-5 lg:mx-16 gap-5 lg:gap-8 lg:items-center mb-16 md:mb-28">
        <p className="text-white text-sm font-medium md:text-base text-justify">
          Welcome to Richfeyn – your partner in simplifying and enhancing your
          everyday life.
          <br /> &nbsp;&nbsp; We understand the demands of modern living, where
          time is a precious commodity and convenience is paramount. That's why
          we've embarked on a mission to revolutionize the way you approach your
          daily routines and responsibilities. At Richfeyn, we are passionate
          about creating innovative solutions that empower you to thrive in a
          fast-paced world. Our journey began with a simple yet powerful idea:
          to streamline and automate the repetitive tasks that often consume
          your time and energy. From household shopping to essential supplies,
          we're here to redefine convenience and elevate your quality of life.
          {!isMobile ? (
            <>
              <br />
              Our foundation rests on cutting-edge technology, thoughtful
              design, and a deep commitment to your well-being. We've
              meticulously crafted an ecosystem of smart tools and services that
              seamlessly integrate into your lifestyle, saving you time,
              reducing stress, and allowing you to focus on what truly matters.
              With Richfeyn at your side, you'll discover newfound efficiency
              and freedom, enabling you to pursue your passions and spend more
              time with loved ones. Our commitment to excellence drives us to
              continuously innovate and deliver solutions that make a meaningful
              impact on your daily routine. As you explore the world of
              Richfeyn, you're embarking on a journey of transformation and
              empowerment. Our commitment to excellence, innovation, and your
              well-being guides every step we take. Join us in embracing a
              future where technology and convenience harmonize, where your time
              is reclaimed, and where you have the tools to lead a life of
              purpose and fulfillment.
            </>
          ) : (
            <ReadMore>
              <br />
              Our foundation rests on cutting-edge technology, thoughtful
              design, and a deep commitment to your well-being. We've
              meticulously crafted an ecosystem of smart tools and services that
              seamlessly integrate into your lifestyle, saving you time,
              reducing stress, and allowing you to focus on what truly matters.
              With Richfeyn at your side, you'll discover newfound efficiency
              and freedom, enabling you to pursue your passions and spend more
              time with loved ones. Our commitment to excellence drives us to
              continuously innovate and deliver solutions that make a meaningful
              impact on your daily routine. As you explore the world of
              Richfeyn, you're embarking on a journey of transformation and
              empowerment. Our commitment to excellence, innovation, and your
              well-being guides every step we take. Join us in embracing a
              future where technology and convenience harmonize, where your time
              is reclaimed, and where you have the tools to lead a life of
              purpose and fulfillment.
            </ReadMore>
          )}
        </p>
        <img
          loading="lazy"
          className="w-60 mx-auto lg:w-80 lg:-translate-y-6"
          src="/images/Smart_jar.png"
          alt=""
        /> */}

      {/* </div> */}
      <div className="relative">
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-200 to-blue-200">
        <h2 class="text-4xl font-bold">The First slide</h2>
        <p class="mt-2">Scroll Down for next slide</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-800 to-purple-800 text-white">
        <h2 class="text-4xl font-bold">The Second slide</h2>
        <p class="mt-2">Scroll Down for next slide</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-800 to-pink-800 text-white">
        <h2 class="text-4xl font-bold">The Third slide</h2>
        <p class="mt-2">Scroll Down</p>
    </div>
    <div class="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-indigo-100 text-black">
        <h2 class="text-4xl font-bold">The Fourth slide</h2>
    </div>
</div>
    </>
  );
};

export default AboutUs;
