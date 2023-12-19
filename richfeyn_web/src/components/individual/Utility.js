import React from "react";
import RoundedCards from "../shared/RoundedCards";

const Utility = () => {
  return (
    <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center sm:items-center lg:grid lg:grid-cols-3 gap-5 mx-8 md:px-20 lg:mx-auto max-w-[1400px] mb-16 md:mb-28 mt-6 bg-black">
      <RoundedCards
        profile="http://www.w3.org/2000/svg"
        size="0 0 24 24"
        num="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
        title="Save Time"
        subtitle="No more shopping from multiple shopping apps or making shopping lists manually."
      />

      <RoundedCards
        profile="http://www.w3.org/2000/svg"
        size="0 0 740 512"
        num="M144 0c-13.3 0-24 10.7-24 24v118.1L97 119c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24zm216 200a40 40 0 1 0-80 0a40 40 0 1 0 80 0zm-176 96a40 40 0 1 0-80 0a40 40 0 1 0 80 0zm312 40a40 40 0 1 0 0-80a40 40 0 1 0 0 80zM200 441.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8l26.8-49.9V400c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-54.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l26.8-49.9V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-38.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.6c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-37.8 70.2c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 441.5V480c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-38.5zM415 153l64 64c9.4 9.4 24.6 9.4 33.9 0l64-64c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-23 23V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v118.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z"
        title="No Stress"
        subtitle="Just-in-time delivery eliminates the need for constant checking to avoid running out of supplies at inconvenient times."
      />

      <RoundedCards
        profile="http://www.w3.org/2000/svg"
        size="0 0 24 24"
        num="m16.4 16.625l.1-.75q.05-.375.05-.75q0-2-.875-3.663T13.3 8.7l-1.45 1.45q-.25.25-.55.125T11 9.8V3.5q0-.2.15-.35T11.5 3h6.3q.35 0 .475.3t-.125.55L16.7 5.3q1.3 1.175 2.075 2.8t.775 3.525q0 1.575-.525 2.95t-1.45 2.5q-.425.5-.85.325t-.325-.775ZM6.2 21q-.35 0-.475-.3t.125-.55L7.3 18.7q-1.325-1.175-2.087-2.8t-.763-3.525q0-1.575.525-2.95t1.475-2.5q.425-.5.85-.325t.3.775q-.075.35-.112.725t-.038.775q0 2 .888 3.663T10.7 15.3l1.45-1.45q.25-.25.55-.125t.3.475v6.3q0 .2-.15.35t-.35.15H6.2Z"
        title="One Time SetUp"
        subtitle="The user can set any product, retailer, delivery time slot, or preferences on the app and then enjoy recurring auto-reorders, completely forgetting about shopping."
      />
    </div>
  );
};

export default Utility;
