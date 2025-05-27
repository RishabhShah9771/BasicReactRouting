import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  //NavLink has a special className prop that can be a function.

  const isActiveHandler = ({ isActive }) => {
    return isActive ? classes.active : undefined;
  };
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={isActiveHandler} end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="About" className={isActiveHandler} end>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="Product" className={isActiveHandler} end>
              Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
