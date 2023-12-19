import { Link } from "react-router-dom";
const NavButton = () => {
  return (
    <div className="w-full ml-5">
      <Link
        to="/pricing"
        className=" cursor-pointer relative z-40 inline-block w-auto h-full px-5 py-3 text-sm font-bold leading-none text-white transition-all duration-100 bg-black rounded shadow-md fold-bold sm:w-full lg:shadow-none hover:shadow-xl"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavButton;
