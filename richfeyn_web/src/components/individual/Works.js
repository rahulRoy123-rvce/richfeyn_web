import React, { useEffect, useState } from "react";
import { Image } from "antd";
const Works = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      <h2
        id="hiw"
        className="text-center text-4xl underline font-bold mt-10 mb-3 md:mb-5"
      >
        How it works
      </h2>
      <div className="flex justify-center items-center md:mx-28 mb-16 md:mb-24 mt-16">
        {isMobile ? (
          <Image
            loading="eager"
            className="max-h-screen"
            src="images/How_jar_works.png"
          />
        ) : (
          <Image loading="lazy" src="assets/How_smartjar_works.png" />
        )}
      </div>
    </>
  );
};

export default Works;
