import { NavLink } from "react-router-dom";
import { Search } from "./Search";
import Style from "./nav.module.scss";

export const Nav = () => {
  return (
    <nav className={Style.nav}>
      <div className={Style.navcontainer}>
        <h1>HomeLands</h1>
        <div className={Style.linkcontainer}>
          <NavLink to="/">Forside</NavLink>
          <NavLink to="/housing">Boliger til salg</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
        <Search />
      </div>
    </nav>
  );
};
