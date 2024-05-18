import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navMenu=<>
    <NavLink>HOME</NavLink>
    <NavLink>CONTACT US</NavLink>
    <NavLink>DASHBOARD</NavLink>
    <NavLink>OUR MENU</NavLink>
    <NavLink>OUR SHOPE</NavLink>
    </>
  return (
    <div className="navbar fixed z-10 bg-opacity-30 bg-[#15151580] text-white max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {navMenu}
          </ul>
        </div>
        <div className="font-cinzel text-center">
          <h2 className="capitalize font-extrabold text-2xl">Bistro Boss</h2>
          <h4 className="capitalized font-semibold text-xl">Restaurant</h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navMenu}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
