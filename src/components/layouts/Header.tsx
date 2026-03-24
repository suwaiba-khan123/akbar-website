import { NavLink } from "react-router-dom";
import { routeConst } from "../../utils/commonConst";

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "btn btn-ghost font-semibold text-primary"
    : "btn btn-ghost";

export const Header = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-base-100 shadow-sm">
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to={routeConst.home} className={navClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to={routeConst.about} className={navClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to={routeConst.contact} className={navClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink to={routeConst.home} className="btn btn-ghost text-xl">
            Akbar Tech Solutions
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={routeConst.home} className={navClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={routeConst.about} className={navClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={routeConst.contact} className={navClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};
