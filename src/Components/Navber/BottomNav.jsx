import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/Logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import useShopContext from "./../../Hooks/useShopContext";

function BottomNav({ data }) {
  const link = (
    <>
      <NavLink to="/" className="navLink ">
        Home
      </NavLink>
      <NavLink to="/shop" className="navLink ">
        Shop
      </NavLink>
      <NavLink to="/about" className="navLink ">
        About
      </NavLink>
    </>
  );

  const { wishList, cardList } = useShopContext();
  return (
    <nav className={`${data.fixed ? "bg-blur" : ""} bg-neutral-100`}>
      <div className="wrap flex justify-between items-center py-3">
        <Link to="/">
          <div className="logo flex items-center gap-2">
            <img className="md:w-12 w-9" src={logo} alt="" />
            <h2 className="text-heading font-bold text-halkaBlak text-sm md:text-2xl">
              SHAREE&apos;<span className="text-primary">S</span> HOUSE
            </h2>
          </div>
        </Link>
        <ul className="hidden lg:flex gap-5 items-center">{link}</ul>

        <div className="button flex gap-3 justify-between items-center">
          <div className=" relative">
            <AiOutlineShopping className="cursor-pointer w-6 h-6 text-halkaBlak hover:text-text transition-all duration-300 " />
            {cardList.length > 0 && (
              <span className="absolute badge badge-sm bg-primary -top-2 text-white -right-2">
                {cardList.length}
              </span>
            )}
          </div>

          <div className=" relative">
            <AiOutlineHeart className="cursor-pointer w-6 h-6 text-halkaBlak hover:text-text transition-all duration-300" />
            {wishList > 0 && (
              <span className="absolute badge badge-sm bg-primary -top-2  text-white -right-2">
                {wishList.length}
              </span>
            )}
          </div>

          <div className="dropdown">
            <BiMenu
              tabIndex={0}
              role="button"
              className="bg-green-50 w-8 h-8 rounded-full cursor-pointer text-halkaBlak hover:text-text p-[2px]  duration-300 ease-in hover:bg-primary block  lg:hidden"
              
            />

            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content bg-base-100 -left-52 rounded-box z-[1] mt-4 w-52 p-2 shadow flex flex-col gap-4 items-center py-5 "
            >
              {link}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNav;

BottomNav.propTypes = {
  data: PropTypes.bool.isRequired,
};
