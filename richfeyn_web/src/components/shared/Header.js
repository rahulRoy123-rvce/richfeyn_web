import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../UI/Logo";
import NavButton from "../UI/NavButton";
import { motion } from "framer-motion";
import NavMobile from "../UI/NavMobile";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [ismore, setIsMore] = useState(true);

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

  const navigate = useNavigate();
  const navigateToPath = (path) => {
    navigate("/");
    setTimeout(() => {
      const contactSection = document.getElementById(path);
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const Path = (props) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  );

  const openMobileMenu = () => setIsMore(!ismore);

  const items = [
    {
      key: "0",
      label: (
        <Link
          to="/"
          className="ml-4 whitespace-nowrap text-white hover:text-gray-300 cursor-pointer"
        >
          Home
        </Link>
      ),
    },
    {
      key: "1",
      label: (
        <span
          onClick={() => navigateToPath("features")}
          className="ml-4 text-white hover:text-gray-300 cursor-pointer"
        >
          Features
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span
          onClick={() => navigateToPath("hiw")}
          className="ml-4 text-white hover:text-gray-300 whitespace-nowrap cursor-pointer"
        >
          How it Works
        </span>
      ),
    },
    {
      key: "3",
      label: (
        <Link
          to="/contact"
          className="ml-4 whitespace-nowrap text-white hover:text-gray-300 cursor-pointer"
        >
          Contact Us
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <span
          onClick={() => navigateToPath("about")}
          className="ml-4 text-white hover:text-gray-300 whitespace-nowrap cursor-pointer"
        >
          About Us
        </span>
      ),
    },
    {
      key: "5",
      label: (
        <Link
          to="/pricing"
          className="ml-4 text-white hover:text-gray-300 cursor-pointer"
        >
          Pricing
        </Link>
      ),
    },
  ];
  return (
    <div className="bg-black flex py-3 px-4 justify-between items-center sticky top-0 z-50">
      <Logo />
      {isMobile ? (
        <div className="flex items-center">
          <NavMobile />
          <div onClick={openMobileMenu}>
            {ismore ? (
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="32"
                viewBox="0 0 50 50"
              >
                <Path
                  fill="white"
                  d="M10 12h30v4H10zm0 10h30v4H10zm0 10h30v4H10z"
                />
              </svg>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="24"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="white"
                    d="M24.879 2.879A3 3 0 1 1 29.12 7.12l-8.79 8.79a.125.125 0 0 0 0 .177l8.79 8.79a3 3 0 1 1-4.242 4.243l-8.79-8.79a.125.125 0 0 0-.177 0l-8.79 8.79a3 3 0 1 1-4.243-4.242l8.79-8.79a.125.125 0 0 0 0-.177l-8.79-8.79A3 3 0 0 1 7.12 2.878l8.79 8.79a.125.125 0 0 0 .177 0l8.79-8.79Z"
                  />
                </svg>
                {!ismore && (
                  <motion.div
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{
                      opacity: !ismore ? 1 : 0,
                      scaleY: !ismore ? 1 : 0,
                    }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.1 }}
                    style={{
                      originY: 0,
                      position: "absolute",
                      background: "#292828",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "8px",
                    }}
                    className="absolute pt-3 right-0 mt-2 pr-10 py-3 pl-4 text-center text-white bg-[#292828] text-lg space-y-4 shadow-2xl z-10 ease-linear duration-300"
                  >
                    <div className="space-y-4 pb-2">
                      {items.map((e) => (
                        <p key={e.key}>{e.label}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center text-md">
          {items.map((e) => (
            <p key={e.key}>{e.label}</p>
          ))}
          <NavButton />
        </div>
      )}
    </div>
  );
}

export default Header;
