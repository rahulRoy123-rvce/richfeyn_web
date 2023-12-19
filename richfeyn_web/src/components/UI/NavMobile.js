import { Link } from "react-router-dom";
const NavMobile = () => {
  return (
    <div className="mr-3">
      <Link
        to="/pricing"
        className="text-lg cursor-pointer relative inline-block w-auto h-full px-3 py-2  font-bold leading-none text-white transition-all duration-100 bg-black rounded shadow-md fold-bold lg:text-white sm:w-full lg:shadow-none hover:shadow-xl"
      >
        Contact Us
      </Link>
    </div>
  );
};

export default NavMobile;
