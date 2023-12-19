import { useWindowWidth } from "@react-hook/window-size";
import { useEffect, useState } from "react";

const YtVideo = () => {
  const onlyWidth = useWindowWidth();
  const [width, setWidth] = useState(900);
  useEffect(() => {
    setWidth(
      onlyWidth
        ? onlyWidth > 1000
          ? onlyWidth > 2000
            ? onlyWidth / 4
            : onlyWidth / 3 + 250
          : onlyWidth - 15
        : onlyWidth - 5
    );
  }, [onlyWidth]);

  return (
    <div className="lg:mt-10 xl:mt-10 2xl:mt-10 lg:ml-10">
      <video width={width} height={(width / 16) * 9} controls autoPlay muted>
        <source src="/Richfeyn_demo_video.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default YtVideo;
